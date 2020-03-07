                @foreach($data[1] as $product)
               <!--  <li>{$product->sku}}</li> -->
                <?php $sku=$product->sku;
                $mainimage="assets/images/product20.png";
                 if(count($data[2][$sku])>0){ ?>
                     @foreach($data[2][$sku] as $feature)
                     <?php 

                     if($feature->prdct_feature=='image'){
                     	$mainimage=$feature->feature_value; }
                     	?>
                     <!--<li>{ $feature->prdct_feature }}</li> -->
                     @endforeach
                 <?php }
                ?>                 
                <!--  <product :item="{{json_encode($product)}}" ></product> -->
                  <div class="grid__item">
									<div class="grid-view-item">
											<div class="grid-normal-display">
												<div class="grid__image product-image">
													<a class="grid-view-item__link" href="product.html">

														<img class="grid-view-item__image" src="assets/images/product1.png" alt="Consequuntur magni dolores">
														<img class="hover-image" src="<?php echo $mainimage; ?>" alt="Consequuntur magni dolores" title="Consequuntur magni dolores">
													</a>
													<div class="product-label">
														<div class="label-element deal-label">
															<span>Sale off</span>
														</div>
													</div>
												</div>
												<div class="quickbuy">
													<div class="product-ajax-quickbuy in-stock hidden-xs hidden-sm">
														<div class="effect-ajax-cart">
															<form action="http://demo.tadathemes.com/html_ultrastore/product.html" method="post" enctype="multipart/form-data" class="AddToCartForm form-vertical">
																<input type="hidden" name="quantity" value="1">
																<div class="product-single__add-to-cart">
																	<button type="submit" name="add" class="btn AddToCart">
																		<span class="AddToCartText">
																			Add to Cart
																		</span>
																	</button>
																</div>
															</form>
														</div>
													</div>
												</div>
											</div>
											<div class="group-information style-">
												<div class="grid-view-item__vendor">KingStone</div>
												<div class="h4 grid-view-item__title"><a href="product.html">{{ $product->prdct_name}}</a></div>
												<div class="price-and-ship">
													<div class="grid-view-item__meta grid__item large--three-quarters">	

														<s class="product-price__price"><span class="money">{{ $product->price}}</span></s>
														<span class="product-price__price product-price__sale">
														<span class="money">{{ $product->offer_price}}</span>
														<span class="product-price__sale-label">On Sale</span>
														</span>
													</div>
													<div class="shipcode grid__item large--one-quarter">
														<img src="assets/images/freeshipicon.svg" alt="free shipping icon" />
													</div>
												</div>
												<div class="meter red nostripes">
													<span class="process" style="width: 55px;"></span>
													<span style="width: 42px; display: inline-block;">sold 5</span>
												</div>
												<div class="group-functions">
													<div class="rating-star grid__item one-half">
														<span class="spr-badge" data-rating="5.0">
															<span class="spr-starrating spr-badge-starrating">
																<i class="spr-icon spr-icon-star"></i>
																<i class="spr-icon spr-icon-star"></i>
																<i class="spr-icon spr-icon-star"></i>
																<i class="spr-icon spr-icon-star"></i>
																<i class="spr-icon spr-icon-star"></i>
															</span>																		
														</span>
													</div>
													<ul class="action-button grid__item one-half">
														<li class="button-wishlist">
															<a class="wish-list wlc wl-1559291710422" data-wishlistid="1559291710422" title="Add to Wishlist"><span class=""><i class="fa fa-heart-o"></i></span></a>
														</li>
														<li class="button-compare">
															<a class="wish-list cmc cm-1559291710422" data-compareid="1559291710422" title="Add to Compare"><span class=""><i class="fa fa-exchange"></i></span></a>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									<!--   <li>$data[2][$sku]->prdct_sku}}</li> -->                
                @endforeach
            <!-- <div>$data[1]->links()}}</div> -->