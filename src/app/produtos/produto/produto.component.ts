import { IProduto } from 'src/app/produtos';
import { ProdutosService } from './../../produtos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto: IProduto | undefined;
  quantidade: number = 1;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get('id'));
    this.produto = this.produtosService.getOne(produtoId);
  }

}
