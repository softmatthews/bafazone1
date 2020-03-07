 @extends('layouts.app')

@section('content')
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
            <product :item="{{json_encode($product)}}" ></product>
                 @endforeach 
									
@endsection