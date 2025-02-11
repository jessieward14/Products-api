import { Controller, Post } from "../../node_modules/@nestjs/common";


@Controller('products')
export class ProductsController {

    @Post()
    addProduct() : any 
}

