import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/dtos/cartItem';
import { Product } from 'src/app/dtos/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  @ViewChild('carouselItem') carouselItem: ElementRef;
  @ViewChild('carouselContainer') carouselContainer: ElementRef;
  public items: Product[] = [];
  public screenWidth: any;
  containerPosition: number = 0;
  disabledButtons: boolean = false;
  buttonsHidden: boolean = false;
  public currentPos: number = 0;
  public static readonly TRANSITION: string = 'transform 1000ms ease-in-out';

  productId: string = '';
  public product: Product;
  imageServerUrl: string = environment.imageServerUrl;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id')!;
    this.getProduct(this.productId);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.toggleButtons();
  }

  ngAfterViewCheck() {
    this.toggleButtons();
  }

  private toggleButtons() {
    this.screenWidth = window.innerWidth;
    this.hideControlsIfNotNeeded();
  }

  private hideControlsIfNotNeeded() {
    if (this.buttonsNeeded()) {
      this.buttonsHidden = false;
    } else {
      this.buttonsHidden = true;
    }
  }

  private disableButtons(timeout: number) {
    this.disabledButtons = true;
    setTimeout(() => {
      this.disabledButtons = false;
    }, timeout);
  }

  private buttonsNeeded() {
    let cardSize = this.carouselItem?.nativeElement?.offsetWidth;
    let overallWidth = (cardSize + 30) * this.items.length;
    if (overallWidth! > this.screenWidth) {
      return true;
    } else {
      return false;
    }
  }

  public scrollNext() {
    this.disableButtons(1000);
    let carouselItemWidth = this.carouselItem.nativeElement.offsetWidth;
    this.carouselContainer.nativeElement.style.transition =
      ProductDetailComponent.TRANSITION;
    this.containerPosition = this.containerPosition - carouselItemWidth - 30;
    setTimeout(() => {
      this.carouselContainer.nativeElement.appendChild(
        this.carouselContainer.nativeElement.firstChild
      );
      this.carouselContainer.nativeElement.style.transition = 'none';
      this.containerPosition = 0;
    }, 1000);
    this.movePointerForward();
  }

  public scrollPrev() {
    this.disableButtons(1000);
    let lastChild = this.carouselContainer.nativeElement.lastChild;
    let carouselItemWidth = this.carouselItem.nativeElement.offsetWidth;
    this.carouselContainer.nativeElement.insertBefore(
      lastChild,
      this.carouselContainer.nativeElement.firstChild
    );
    this.carouselContainer.nativeElement.style.transition = 'none';
    this.containerPosition = this.containerPosition - carouselItemWidth - 30;
    setTimeout(() => {
      this.containerPosition = this.containerPosition + carouselItemWidth - 30;
      this.carouselContainer.nativeElement.style.transition =
        ProductDetailComponent.TRANSITION;
      this.containerPosition = 0;
    }, 0);
    this.movePointerBack();
  }

  private movePointerBack() {
    if (this.currentPos > 0) {
      this.currentPos--;
    } else {
      this.currentPos = this.items.length - 1;
    }
  }

  private movePointerForward() {
    if (this.currentPos < this.items.length - 1) {
      this.currentPos++;
    } else {
      this.currentPos = 0;
    }
  }

  getProduct(id: string) {
    this.productService.getProductById(id).subscribe((product) => {
      this.product = product;
      this.productService
        .getProductsByCategoryPaginated(product.categoryId + '', 0, 20)
        .subscribe((data) => {
          this.items = data._embedded.products;
        });
    });
  }

  addToCart() {
    this.cartService.addToCart(new CartItem(this.product, 1));
  }
}
