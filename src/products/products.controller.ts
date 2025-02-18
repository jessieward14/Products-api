import { Controller, Body, Post, Get} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Post() // update computer
    addProduct(
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number,
    ) {
        const generatedId = this.productsService.insertProduct(
            prodTitle,
            prodDesc,
            prodPrice
        );
        return { id: generatedId };
    }

    @Get()
    getAllProducts() {
        

    }

}

