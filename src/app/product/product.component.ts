import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  data: any = undefined

  fetchData(product: any) {
    if (typeof window !== 'undefined' && product) {
      fetch(`https://layer0-docs-layer0-ecommmerce-api-example-default.layer0-limelight.link/products/${product}`)
        .then((res) => res.json())
        .then((res) => {
          this.data = res
        })
    }
  }

  constructor(route: ActivatedRoute) {
    route.url.subscribe((i) => {
      this.fetchData(i[0].path)
    })
  }

  ngOnInit(): void {}
}
