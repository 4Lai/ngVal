import { AfterViewInit, Component } from '@angular/core';
import { GameModes } from '../../interfaces/game-modes';
import { ActivatedRoute } from '@angular/router';
import { intersect } from '../../helpers/intersector';

@Component({
  selector: 'app-game-modes',
  templateUrl: './game-modes.component.html',
  styleUrls: ['./game-modes.component.css'],
})
export class GameModesComponent implements AfterViewInit {
  gameModeList: GameModes['data'] =
    this.activatedRoute.snapshot.data['gameModes'];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngAfterViewInit() {
    intersect();
  }

}
