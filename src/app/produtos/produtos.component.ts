import { ProdutosService } from './../produtos.service';
import { IProduto } from './../produtos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: IProduto[] | undefined;

  constructor(
    private ProdutosService: ProdutosService
  ) {}

  ngOnInit(): void {
    this.produtos = this.ProdutosService.getAll();
  }
}
