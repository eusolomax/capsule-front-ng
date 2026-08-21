import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';
import Hover from 'wavesurfer.js/dist/plugins/hover.esm.js'
import { signal } from 'wavesurfer.js/dist/reactive/store.js';
import { DurationPipe } from '../../pipes/duration-pipe';
import { LabelModule } from 'primeng/label';

@Component({
  selector: 'app-track-item',
  imports: [DurationPipe, LabelModule],
  providers: [],
  templateUrl: './track-item.html',
  styleUrl: './track-item.css',
})
export class TrackItem implements OnInit {
  waveSurfer!: WaveSurfer;

  //Placeholder
  data = signal({
    duration_seconds: 158,
    file_path: "//audiohosting.web.app/kennethcaple-audioloop-richish.mp3",
    track_description: "Something new in C# minor - 128bpm",
    track_name: "im a wizard",
    uuid: "a516eb23-c6f2-4807-9501-98b4b8265670"
  })

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.waveSurfer = WaveSurfer.create({
      container: '#waveform',
      barWidth: 3,
      height: 70,
      plugins: [
        Hover.create({
          lineColor: '#000',
          lineWidth: 0.8,
          labelBackground: '#00000020',
          labelPreferLeft: true,
          labelSize: 9,
        })
      ]
    });

    this.waveSurfer.load(this.data.value.file_path)

    this.waveSurfer.on('click', () => {
      this.waveSurfer.play()
    });
  }

  onPlayButtonPressed(): void {
    this.waveSurfer.play();
  }

  onStopButtonPressed(): void {
    this.waveSurfer.stop();
  }

}