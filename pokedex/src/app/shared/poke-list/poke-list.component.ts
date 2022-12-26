import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  private setPokemonsList: any
  public pokemonsList: any

  constructor(private pokeApiService:PokeApiService) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe({
      next: res => {
        this.setPokemonsList = res.results
        this.pokemonsList = this.setPokemonsList
      }
    })
  }

  handleSearch(value: string){
    const filter = this.setPokemonsList.filter( (res: any) => {
      return !res.name.indexOf(value.toLowerCase())
    })

    this.pokemonsList = filter
  }
}
