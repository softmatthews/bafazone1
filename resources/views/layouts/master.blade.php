<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface supports-pointerevents" lang="en" style="height: 100%;">
  
<head>    
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">  
  <link rel="canonical" href="https://yoursite.com/">
  <link rel="shortcut icon" href="assets/images/fav.png" type="image/png">

    <title>@yield("title")</title>
    <meta property="og:type" content="website">
    <meta property="og:title" content="Megastore HTML">
    <meta property="og:url" content="https://yoursite.com/">
    <meta property="og:description" content="Responsive HTML Template">
    <meta property="og:site_name" content="Responsive HTML Template"> 
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="Megastore HTML">
    <meta name="twitter:description" content="">
  
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&amp;display=swap" rel="stylesheet">    
  <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet">  
  
  


   

  

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

<!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
  
  </head>
  
<body id="megastore-red" class="megastore template-index" style="position: relative; min-height: 100%; top: 0px;">
    
    <div class="container" >
        <!-- <h1>Hi Laravel</h1>
        <p>Hello world</p> -->
     @yield("content")
    </div>

   <div id="html-section-footer" class="html-section">
      <footer class="site-footer" role="contentinfo">
        <div class="footer-info">
          <div class="wrapper">
            <div class="grid footer-info-inner">
              <div class="info-element grid__item one-quarter small--one-half">
                <div class="info-wrapper">
                  <div class="image grid__item one-whole">
                    <img src="assets/images/icon1.png" alt="">
                  </div>
                  <div class="text grid__item one-whole">
                    <div class="text1">WORLDWIDE DELIVERY</div>
                    <div class="text2">We ship to over 200 countries &amp; regions.</div>
                  </div>
                </div>
              </div>
              <div class="info-element grid__item one-quarter small--one-half">
                <div class="info-wrapper">
                  <div class="image grid__item one-whole">
                    <img src="assets/images/icon2.png" alt="">
                  </div>
                  <div class="text grid__item one-whole">
                    <div class="text1">SAFE PAYMENT</div>
                    <div class="text2">Pay with the world’s most popular and secure payment methods.</div>
                  </div>
                </div>
              </div>
              <div class="info-element grid__item one-quarter small--one-half">
                <div class="info-wrapper">
                  <div class="image grid__item one-whole">
                    <img src="assets/images/icon3.png" alt="">
                  </div>
                  <div class="text grid__item one-whole">
                    <div class="text1">SHOP WITH CONFIDENCE</div>
                    <div class="text2">Our Buyer Protection covers your purchase from click to delivery.</div>
                  </div>
                </div>
              </div>
              <div class="info-element grid__item one-quarter small--one-half">
                <div class="info-wrapper">
                  <div class="image grid__item one-whole">
                    <img src="assets/images/icon4.png" alt="">
                  </div>
                  <div class="text grid__item one-whole">
                    <div class="text1">24/7 HELP CENTER</div>
                    <div class="text2">Round-the-clock assistance for a smooth shopping experience.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-main">
          <div class="wrapper">
            <div class="grid">
              <div class="link-block grid__item one-fifth">
                <div class="heading">Buyer Central
                  <i class="fa fa-caret-down" aria-hidden="true"></i>
                </div>
                <div class="content">
                  <ul class="grid__link">
                    <li>
                      <a href="collection.html">
                        <span>Sign in</span>
                      </a>
                    </li>
                    <li>
                      <a href="collection.html">
                        <span>Buyer Protection</span>
                      </a>
                    </li>
                    <li>
                      <a href="collection.html">
                        <span>Payment Options</span>
                      </a>
                    </li>
                    <li>
                      <a href="collection.html">
                        <span>Shipping Policy</span>
                      </a>
                    </li>
                    <li>
                      <a href="collection.html">
                        <span>Return Policy</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="link-block grid__item one-fifth">
                <div class="heading">Information
                  <i class="fa fa-caret-down" aria-hidden="true"></i>
                </div>
                <div class="content">
                  <ul class="grid__link">
                    <li>
                      <a href="collection.html">
                        <span>Merchant Central</span>
                      </a>
                    </li>
                    <li>
                      <a href="collection.html">
                        <span>Merchant Sign In</span>
                      </a>
                    </li>
                    <li>
                      <a href="collection.html">
                        <span>Merchant Registration</span>
                      </a>
                    </li>
                    <li>
                      <a href="collection.html">
                        <span>How Does It Work</span>
                      </a>
                    </li>
                    <li>
                      <a href="collection.html">
                        <span>Pricing</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="link-block grid__item one-fifth">
                <div class="heading">Help
                  <i class="fa fa-caret-down" aria-hidden="true"></i>
                </div>
                <div class="content">
                  <ul class="grid__link">
                    <li>
                      <a href="collection.html">
                        <span>See all Help</span>
                      </a>
                    </li>
                    <li>
                      <a href="collection.html">
                        <span>My Account</span>
                      </a>
                    </li>
                    <li>
                      <a href="collection.html">
                        <span>FAQs</span>
                      </a>
                    </li>
                    <li>
                      <a href="collection.html">
                        <span>Other Services</span>
                      </a>
                    </li>
                    <li>
                      <a href="collection.html">
                        <span>Shop Box</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="newsletter-social-block grid__item two-fifths">
                <div class="newsletter-area">
                  <div class="heading">Subscription</div>
                  <div class="desc">
                    Register now to get updates on promotions and coupons
                  </div>
                  <div class="action">
                    <form method="post" action="#" id="contact_form" accept-charset="UTF-8" class="contact-form">
                      <input type="hidden" name="form_type" value="customer">
                      <input type="hidden" name="utf8" value="✓">
                      <div class="newsletter-box input-group">
                        <input type="hidden" name="contact[tags]" value="newsletter">
                        <input type="email" name="contact[email]" id="Email" class="input-group__field newsletter__input" value="" placeholder="Please enter your email">
                        <span class="input-group__btn">
                          <button type="submit" class="btn newsletter__submit" name="commit" id="Subscribe">Subscription</button>
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="social-area">
                  <div class="heading">Stay connected</div>
                  <div class="social">
                    <ul class="socialLinks socialLinks--alt">
                      <li class="socialLinks-item">
                        <a href="collection.html" title="" class="icon-social facebook">
                          <i class="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li class="socialLinks-item">
                        <a href="collection.html" title="" class="icon-social twitter">
                          <i class="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li class="socialLinks-item">
                        <a href="collection.html" title="" class="icon-social google-plus">
                          <i class="fa fa-google-plus"></i>
                        </a>
                      </li>
                      <li class="socialLinks-item">
                        <a href="collection.html" title="" class="icon-social pinterest">
                          <i class="fa fa-pinterest"></i>
                        </a>
                      </li>
                      <li class="socialLinks-item">
                        <a href="collection.html" title="" class="icon-social instagram">
                          <i class="fa fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="wrapper">
            <div class="grid">
              <div class="copyright-block grid__item one-half">
                <div class="cr-text">
                  <p>© 2019 Megastore. All rights Reserved</p>
                </div>
              </div>
              <div class="payment-block">
                <ul class="payment-icons list--inline">
                  <li class="payment-icon">                   
                    <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-visa" viewBox="0 0 27 20">
                      <path fill="#444" d="M19.16 8.465q-.781-.352-1.621-.332-.605 0-.928.225t-.322.508.283.508.947.557q1.855.84 1.836 2.285 0 1.328-1.035 2.119t-2.773.791q-1.445-.02-2.441-.449l.293-1.914.273.156q1.113.449 2.07.449.527 0 .918-.225t.41-.635q0-.273-.254-.498t-.918-.557q-.371-.195-.654-.371t-.596-.459-.488-.664-.176-.811q.02-1.23 1.064-2.002t2.666-.771q1.035 0 1.953.332l-.273 1.855zm-9.14-1.934l-3.457 8.477H4.258L2.461 8.25q.938.371 1.709 1.133t1.104 1.66Q4.063 7.703.001 6.688l.02-.156h3.535q.82 0 .996.684l.762 3.906.254 1.172 2.129-5.762h2.324zm3.085 0l-1.367 8.477H9.55l1.367-8.477h2.188zm13.946 8.477H25q-.156-.996-.234-1.27l-2.813-.02-.449 1.289H19.18l3.262-7.793q.293-.684 1.152-.684h1.68zM23.77 8.797l-.137.361q-.078.205-.127.342t-.029.117q-.703 1.875-.879 2.383h1.777l-.469-2.461z"></path>
                    </svg>
                  </li>
                  <li class="payment-icon">
                    <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon--wide icon-master" viewBox="0 0 23 15">
                      <path d="M17.375 8.166c-.537 0-.644.237-.644.437 0 .1.061.276.284.276.437 0 .53-.575.514-.699-.015 0-.03-.015-.154-.015zm-6.301-.975c-.399 0-.476.453-.476.499h.813c-.008-.039.07-.499-.337-.499zm-5.526.975c-.537 0-.645.237-.645.437 0 .1.061.276.285.276.437 0 .53-.575.514-.699-.016 0-.03-.015-.154-.015zm15.45-.899c-.323 0-.576.376-.576.937 0 .346.122.568.384.568.399 0 .583-.515.583-.899.008-.422-.13-.606-.392-.606zM16.292.951a6.7 6.7 0 0 0-4.368 1.62 7.007 7.007 0 0 1 1.88 3.024h-.322a6.772 6.772 0 0 0-1.789-2.817 6.723 6.723 0 0 0-1.788 2.817h-.323A7.004 7.004 0 0 1 11.58 2.47 6.817 6.817 0 0 0 7.097.798 6.859 6.859 0 0 0 .236 7.659a6.86 6.86 0 0 0 11.343 5.196 7.07 7.07 0 0 1-1.872-2.764h.33a6.727 6.727 0 0 0 1.657 2.449 6.731 6.731 0 0 0 1.659-2.449h.33a6.937 6.937 0 0 1-1.759 2.656 6.7 6.7 0 0 0 4.368 1.62c3.699 0 6.708-3.009 6.708-6.709C23 3.958 19.992.95 16.292.95v.001zM3.13 9.44l.414-2.618-.936 2.618h-.499l-.061-2.618-.445 2.618H.897l.584-3.477h1.066l.031 2.133.721-2.133H4.45L3.875 9.44H3.13zm2.495 0l.022-.277c-.015 0-.23.338-.752.338-.268 0-.705-.146-.705-.783 0-.813.66-1.081 1.297-1.081.1 0 .314.015.314.015s.023-.046.023-.184c0-.223-.2-.254-.468-.254-.475 0-.798.13-.798.13l.107-.63s.384-.16.883-.16c.26 0 1.005.03 1.005.882l-.284 2.01h-.644V9.44zm2.709-.89c0 .967-.937.928-1.105.928-.614 0-.799-.085-.822-.092l.1-.636c0-.008.307.107.645.107.199 0 .453-.015.453-.253 0-.354-.913-.269-.913-1.106 0-.737.544-.951 1.09-.951.414 0 .674.053.674.053l-.091.645s-.4-.03-.499-.03c-.26 0-.399.052-.399.237 0 .376.868.191.868 1.098h-.001zM9.4 7.306l-.207 1.266c-.016.1.015.238.268.238.061 0 .138-.023.185-.023l-.092.622c-.077.023-.284.092-.545.092-.338 0-.583-.192-.583-.622 0-.292.414-2.67.43-2.686h.73l-.078.43h.36l-.091.683H9.4zm1.772 1.55c.369 0 .775-.176.775-.176l-.13.705s-.238.123-.768.123c-.583 0-1.258-.246-1.258-1.274 0-.89.544-1.681 1.274-1.681.798 0 1.044.583 1.044 1.067 0 .191-.092.668-.092.668h-1.49c0-.016-.137.567.645.567v.001zm2.426-1.42c-.506-.176-.544.799-.76 2.01h-.752l.453-2.824h.683l-.06.407s.245-.445.567-.445a.92.92 0 0 1 .138.007c-.092.2-.185.376-.269.844v.001zm2.096 1.965s-.392.1-.637.1c-.868 0-1.313-.6-1.313-1.512 0-1.374.822-2.103 1.666-2.103.376 0 .821.176.821.176l-.122.775s-.299-.207-.668-.207c-.498 0-.944.476-.944 1.335 0 .423.208.821.722.821.246 0 .606-.176.606-.176l-.13.79-.001.001zm1.756.039l.023-.277c-.016 0-.23.338-.752.338-.268 0-.706-.146-.706-.783 0-.813.66-1.081 1.297-1.081.1 0 .315.015.315.015s.023-.046.023-.184c0-.223-.2-.254-.468-.254-.476 0-.799.13-.799.13l.108-.63s.384-.16.882-.16c.26 0 1.006.03 1.006.882l-.284 2.01c-.008-.007-.645-.007-.645-.007zm1.512.008h-.752l.453-2.825h.683l-.06.407s.245-.446.567-.446c.091 0 .138.008.138.008-.1.2-.185.376-.269.844-.506-.176-.544.807-.76 2.01v.002zm2.234-.008l.03-.26s-.245.306-.683.306c-.606 0-.906-.583-.906-1.182 0-.929.561-1.735 1.228-1.735.43 0 .706.376.706.376l.16-.975h.73l-.56 3.469h-.706zm1.367-.015a.195.195 0 0 1-.108.03.178.178 0 0 1-.107-.03.226.226 0 0 1-.085-.085.187.187 0 0 1-.03-.108c0-.038.007-.077.03-.107a.226.226 0 0 1 .085-.085.187.187 0 0 1 .107-.03c.039 0 .077.007.108.03.038.016.061.046.085.085.023.038.03.069.03.107a.178.178 0 0 1-.03.108.218.218 0 0 1-.085.085zm-.024-.353a.197.197 0 0 0-.183 0 .156.156 0 0 0-.07.069.197.197 0 0 0 0 .183c.016.03.039.054.07.07a.197.197 0 0 0 .183 0 .151.151 0 0 0 .07-.07.197.197 0 0 0 0-.183.156.156 0 0 0-.07-.07zm-.03.284l-.023-.039a.18.18 0 0 0-.039-.053c-.008-.007-.015-.008-.03-.008h-.023v.1h-.038v-.238h.084c.031 0 .047 0 .062.008.014.008.022.016.03.023.008.007.008.022.008.038s-.008.03-.016.046c-.016.016-.03.023-.046.023.008 0 .016.008.023.016.006.008.022.023.038.046l.03.047h-.06v-.01zm-.015-.17c0-.008 0-.016-.008-.016l-.016-.015c-.008 0-.023-.008-.038-.008h-.047v.069h.047c.022 0 .038 0 .046-.008.016-.008.016-.016.016-.023v.001z" fill="#444" fill-rule="evenodd"></path>
                    </svg>
                  </li>
                  <li class="payment-icon">
                    <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-american_express" viewBox="0 0 20 20">
                      <path fill="#444" d="M8.373 7.623v-.46H6.606V9.37h1.767v-.453h-1.24v-.44H8.34v-.453H7.133v-.4zm2.487.134c0-.247-.1-.393-.267-.487-.173-.1-.367-.107-.64-.107H8.74v2.213h.527v-.807h.567c.193 0 .307.02.387.093.093.107.087.3.087.433v.28h.533v-.433c0-.2-.013-.293-.087-.407a.629.629 0 0 0-.26-.187.638.638 0 0 0 .367-.593zm-.693.313c-.073.047-.16.047-.26.047h-.64v-.493h.653c.093 0 .187.007.253.04s.113.1.113.193c-.007.1-.047.173-.12.213zm-8.874.813h1.1l.2.493h1.073V7.643l.767 1.733H4.9l.767-1.733v1.733h.54V7.163h-.873l-.633 1.5-.693-1.5h-.86v2.093l-.9-2.093h-.787L.574 9.23v.14h.513l.207-.487zm.547-1.346l.36.88h-.72l.36-.88zm11.22.1h.5v-.473h-.513c-.367 0-.633.08-.8.26-.227.24-.287.533-.287.867 0 .4.093.653.28.847.147.2.413.273.767.247h.62l.2-.493h1.1l.207.493h1.073v-1.66l1 1.66h.747V7.172h-.54v1.54l-.927-1.54h-.807v2.093l-.893-2.093H14l-.747 1.74h-.24c-.14 0-.287-.027-.367-.113-.1-.113-.147-.28-.147-.52 0-.233.06-.407.153-.5.107-.113.213-.14.407-.14zm1.32-.1l.367.88h-.727l.36-.88zm-3.213-.374h.54v2.213h-.54V7.163zm1.96 4.4a.522.522 0 0 0-.273-.493c-.173-.093-.367-.107-.633-.107h-1.22v2.213h.533v-.807h.567c.193 0 .313.02.387.1.1.1.087.3.087.433v.273h.533v-.44c0-.193-.013-.293-.087-.407a.585.585 0 0 0-.26-.187.61.61 0 0 0 .367-.58zm-.694.314a.534.534 0 0 1-.26.047h-.64v-.493h.653c.093 0 .187 0 .253.04.067.033.107.107.107.2s-.047.167-.113.207zM9.86 10.97H8.173l-.673.727-.653-.727h-2.12v2.213H6.82l.673-.733.653.733h1.027v-.74h.66c.46 0 .92-.127.92-.74-.007-.62-.473-.733-.893-.733zm-3.313 1.747H5.254v-.44h1.16v-.453h-1.16v-.4h1.327l.58.647-.613.647zm2.1.26l-.813-.9.813-.873v1.773zm1.206-.987h-.68v-.56h.687c.193 0 .32.08.32.273 0 .187-.127.287-.327.287zm5.327-.567v-.453h-1.76v2.207h1.76v-.46h-1.233v-.44h1.207v-.453h-1.207v-.4zm4.127.647a.171.171 0 0 0-.047-.053c-.12-.12-.313-.173-.6-.18l-.287-.007a.623.623 0 0 1-.207-.027.169.169 0 0 1-.113-.167c0-.073.02-.12.08-.16.053-.033.12-.04.213-.04h.96v-.473h-1.053c-.553 0-.76.34-.76.66 0 .7.62.667 1.113.687.093 0 .147.013.187.047s.067.08.067.147c0 .06-.027.107-.06.147-.04.04-.113.053-.213.053h-1.013v.473h1.02c.34 0 .587-.093.72-.28a.724.724 0 0 0 .113-.413c-.007-.193-.047-.313-.12-.413zm-.774 1.54h-1.367v-.2c-.16.127-.447.2-.72.2h-4.313v-.713c0-.087-.007-.093-.093-.093h-.067v.807h-1.42v-.833c-.24.1-.507.113-.733.107h-.167v.733h-1.72l-.427-.48-.447.48H4.246v-3.087h2.847l.407.473.433-.473H9.84c.22 0 .58.02.747.18v-.18h1.707c.16 0 .507.033.713.18v-.18h2.58v.18c.127-.12.4-.18.633-.18h1.447v.18c.153-.107.367-.18.66-.18h.98V.258H.574v7.78l.573-1.313h1.38l.18.367v-.367H4.32l.353.793.347-.793h5.127c.233 0 .44.047.593.18v-.18h1.407v.18c.24-.133.54-.18.88-.18h2.033l.187.367v-.367h1.507l.207.367v-.367h1.467v3.08h-1.48l-.28-.467v.467h-1.853l-.2-.493h-.453l-.207.493h-.96c-.38 0-.66-.087-.847-.187v.187h-2.28v-.7c0-.1-.02-.107-.08-.107h-.087v.807H5.288v-.38l-.16.38h-.92l-.16-.38v.373H2.275l-.2-.493h-.453l-.207.493h-.84v9.313h18.727v-5.653c-.207.113-.487.153-.767.153zm-2.013-.907h-1.027v.473h1.027c.533 0 .827-.22.827-.7 0-.227-.053-.36-.16-.467-.12-.12-.313-.173-.607-.18l-.287-.007a.623.623 0 0 1-.207-.027.169.169 0 0 1-.113-.167c0-.073.02-.12.08-.16.053-.033.113-.04.213-.04h.967v-.473h-1.06c-.553 0-.753.34-.753.66 0 .7.62.667 1.113.687.093 0 .147.013.187.047.033.033.067.08.067.147 0 .06-.027.107-.06.147-.033.047-.107.06-.207.06z"></path>
                    </svg>
                  </li>
                  <li class="payment-icon">
                    <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon--wide icon-paypal" viewBox="0 0 36 20">
                      <path fill="#444" d="M33.691 7.141h2.012l-1.66 7.5h-1.992zM5.332 7.16q.918 0 1.553.674t.381 1.865q-.234 1.152-1.064 1.807t-1.963.654H2.696l-.547 2.48H.001l1.641-7.48h3.691zm19.141 0q.918 0 1.563.674t.391 1.865q-.156.762-.596 1.328t-1.074.85-1.396.283h-1.523l-.527 2.48h-2.148l1.641-7.48h3.672zM8.027 9.055q.098-.02.42-.098t.537-.127.566-.098.684-.049q.547-.02 1.025.078t.879.313.566.645.029 1.016l-.82 3.906H9.94l.137-.586q-.41.41-1.035.586t-1.182.088-.889-.615-.176-1.387q.215-1.016 1.221-1.455t2.744-.439q.059-.293-.059-.469t-.352-.244-.625-.049q-.508.02-1.094.156t-.781.254zm19.18 0q.117-.02.342-.078t.42-.107.439-.088.508-.068.537-.029q.566-.02 1.045.078t.879.313.576.645.039 1.016l-.84 3.906H29.16l.137-.586q-.41.41-1.045.586t-1.201.088-.898-.615-.176-1.387q.137-.703.684-1.123t1.348-.596 1.973-.176q.098-.449-.166-.615t-.869-.146q-.352 0-.762.078t-.713.166-.459.166zM4.004 10.734q.273 0 .537-.137t.449-.371.244-.527q.117-.43-.098-.723t-.625-.293H3.476l-.469 2.051h.996zm19.16 0q.41 0 .781-.303t.469-.732-.127-.723-.615-.293h-1.094l-.43 2.051h1.016zm-9.531-1.933l.801 5.879-1.445 2.461h2.207l4.688-8.34h-2.031L15.9 12.278l-.313-3.477h-1.953zm-3.242 3.887q0-.195.098-.527h-.508q-.918 0-1.172.488-.195.352-.01.586t.537.234q.859-.039 1.055-.781zm19.199 0q.039-.332.117-.527h-.488q-.977 0-1.191.488-.195.352-.01.586t.537.234q.879-.039 1.035-.781z"></path>
                    </svg>
                  </li>
                  <li class="payment-icon">
                    <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-diners_club" viewBox="0 0 17 20">
                      <path fill="#444" d="M10.156 3.875q1.895 0 3.525.859t2.646 2.471 1.016 3.584q0 1.836-1.006 3.418t-2.666 2.49-3.516.908H6.913q-1.855 0-3.457-.908t-2.529-2.49-.928-3.418q0-1.992.938-3.584t2.51-2.461 3.467-.869h3.242zM6.934 17.02q1.719 0 3.164-.84t2.285-2.285.84-3.164q0-1.699-.84-3.145t-2.285-2.285-3.164-.84q-1.699 0-3.145.84T1.504 7.586t-.84 3.145q0 1.719.84 3.164t2.285 2.285 3.145.84zm-1.426-2.579q-1.133-.43-1.836-1.445t-.723-2.266q.02-1.25.732-2.275t1.826-1.436v7.422zM8.379 7.02q1.113.41 1.826 1.436t.713 2.275-.713 2.266-1.826 1.445V7.02z"></path>
                    </svg>
                  </li>
                  <li class="payment-icon">
                    <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon--wide icon-discover" viewBox="0 0 52 20">
                      <path fill="#444" d="M22.598 14.617q-1.094.488-2.031.488-1.855 0-3.125-1.26t-1.27-3.115q0-1.797 1.299-3.076t3.135-1.279q1.035 0 1.992.508v1.914q-.957-.938-2.031-.938-1.152 0-1.943.84t-.791 2.031q0 1.27.791 2.07t2.021.801q1.055 0 1.953-.898v1.914zm-8.086-6.152q-.586-.664-1.328-.664-.527 0-.869.264t-.342.654q0 .332.264.557t.986.479q1.406.508 1.914 1.064t.508 1.553q0 1.211-.811 1.973t-2.08.762q-1.816 0-2.891-1.582l1.055-1.016q.586 1.113 1.777 1.113.547 0 .908-.332t.361-.84q0-.527-.488-.859-.273-.176-1.133-.469-1.133-.43-1.592-.938t-.459-1.387q0-1.016.752-1.699t1.846-.684q1.387 0 2.461.957zm13.164-2.051q1.875 0 3.154 1.26t1.279 3.076-1.289 3.086-3.145 1.27q-1.914 0-3.193-1.25t-1.279-3.145q0-1.797 1.309-3.047t3.164-1.25zm-25.293.137q1.973 0 3.232 1.172t1.26 3.008q0 .918-.391 1.768t-1.113 1.455q-1.211.977-2.988.977H0V6.552h2.383zm5.234 0h1.641v8.379H7.617V6.551zm30.43 0h1.777l-3.633 8.574h-.859l-3.535-8.574h1.758l2.227 5.625zm2.5 0h4.629v1.426h-2.988v1.855h2.871v1.406h-2.871v2.266h2.988v1.426h-4.629V6.551zm8.125 0q1.406 0 2.168.645t.762 1.836q0 .957-.479 1.563t-1.396.801l2.617 3.535h-1.992l-2.266-3.398h-.195v3.398H46.25V6.552h2.422zm-.313 3.847q1.582 0 1.582-1.289 0-1.23-1.582-1.23h-.469v2.52h.469zM2.09 13.504q1.484 0 2.207-.664.43-.391.674-.947t.244-1.162q0-1.27-.918-2.07-.742-.684-2.207-.684h-.449v5.527h.449z"></path>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div> 
  
  <div class="combo-icons medium-down--hide">
    <div id="float-saleoff" title="Special Deals">
      <a href="page-saleoff.html">
        <i class="fa fa-gift" aria-hidden="true"></i>
      </a>
    </div>
    <div id="float-wishlist" title="My Wishlist">
      <a href="page-wishlist.html">
        <i class="fa fa-heart" aria-hidden="true"></i>
        <span class="number">
          <span class="wlnumber">0</span>
        </span>
      </a>
    </div>
    <div id="float-compare" title="My Compare">
      <a href="page-compare.html">
        <i class="fa fa-refresh" aria-hidden="true"></i>
        <span class="number">
          <span class="cpnumber">0</span>
        </span>
      </a>
    </div>
  </div>
  <div id="scroll-to-top" title="Scroll to Top" class="off">
    <i class="fa fa-caret-up"></i>
  </div>
  
  <script> 
    var productsProIO=[];
    var productProIO= {
      "id": "1899239866457", "title": "Consequuntur magni dolores", "url": "./product.html", "price": "$199.00", "image": "./assets/images/product1.png"
    }
    productsProIO.push(productProIO);
    var productProIO= {
      "id": "1899239145561", "title": "Raesent Scelerisque Dan", "url": "./product.html", "price": "$19.99", "image": "./assets/images/product3.png"
    }
    productsProIO.push(productProIO);
    var productProIO= {
      "id": "1899238654041", "title": "Quisque vel enim quis", "url": "./product.html", "price": "$27.99", "image": "./assets/images/product5.png"
    }
    productsProIO.push(productProIO);
    var productProIO= {
      "id": "1899238064217", "title": "Quisque vel enim", "url": "./product.html", "price": "$79.99", "image": "./assets/images/product7.png"
    }
    productsProIO.push(productProIO);
    var productProIO= {
      "id": "1899238064217", "title": "Quis nostrum exercitationem", "url": "./product.html", "price": "$199.99", "image": "./assets/images/product9.png"
    }
    productsProIO.push(productProIO);
    
    var notifyProIO = {
      version: 1,
      isNotifyEnabled: function() {
        var t = !0,
          e = document.getElementsByTagName("meta");
        for (i = 0; i < e.length; i++) "notify:enabled" == e[i].getAttribute("name") && "false" === e[i].getAttribute("content") && (t = !1);
        return this.settings.hideMobile && this.isMobileDevice() && (t = !1), t
      },
      isMobileDevice: function() {
        var t = navigator.userAgent || navigator.vendor || window.opera;
        return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4)) ? !0 : !1
      },
      setup: function(t) {
        if (this.isNotifyEnabled()) {
          this.products = t;
          var i = document.createElement("div");
          i.id = "suggestproduct", i.className = "suggestion-modal", document.body.appendChild(i), this.notificationDiv = document.getElementById("suggestproduct"), setTimeout("notifyProIO.runNotifications()", this.settings.initialDelay + 1)
        }
      },
      runNotifications: function() {
        var t = !1;
        if (this.settings.totalDisplayed < this.settings.totalPerPage) {
          this.settings.totalDisplayed++;
          for (var i in this.products)
            if (product = this.products[i], null === localStorage.getItem("snv-" + product.id)) {
              localStorage.setItem("snv-" + product.id, 1), this.displayNotification(product.title, product.image, product.url, product.price), t = !0;
              break
            }
          t ? setTimeout("notifyProIO.runNotifications()", this.settings.displayInterval + this.settings.displayHold) : this.settings.loop && (this.clearLocalStorage(), this.runNotifications())
        }
      },
      displayNotification: function(t, i, e, o) {
        var n = '<a href="' + e + '">' + t + "</a>",
          p = "Other Customers also viewed",
          s = this.settings.message.replace("{product_with_link}", n).replace("{money}", '<span class="price">' + o + "</span>");
        document.getElementById("suggestproduct").innerHTML = i ? '<div class="title">' + p + '</div><div class="content"><img src="' + i + '"><p>' + s + "</p></div>" : "<p>" + s + "</p></div>", setTimeout(function() {
          notifyProIO.animateIn()
        }, 500), setTimeout(function() {
          notifyProIO.animateOut()
        }, this.settings.displayHold)
      },
      animateIn: function() {
        var t = 0,
          i = 0,
          e = this,
          o = setInterval(function() {
            t >= 1 && clearInterval(o), e.notificationDiv.style.bottom = i + "px", e.notificationDiv.style.opacity = t, e.notificationDiv.style.filter = "alpha(opacity=" + 100 * t + ")", e.notificationDiv.style.display = "block", t += .05, i += 1
          }, 25)
      },
      animateOut: function() {
        var t = 1,
          i = 20,
          e = this,
          o = setInterval(function() {
            return 0 >= t ? (clearInterval(o), e.notificationDiv.style.display = "none", !1) : (e.notificationDiv.style.bottom = i + "px", e.notificationDiv.style.opacity = t, e.notificationDiv.style.filter = "alpha(opacity=" + 100 * t + ")", t -= .05, t = t.toFixed(2), void(i -= 1))
          }, 25)
      },
      clearLocalStorage: function() {
        for (var t = localStorage.length - 1; t > 0; t--) "snv" === localStorage.key(t).split("-")[0] && localStorage.removeItem(localStorage.key(t))
      }
    };
    
    notifyProIO.settings = {};
    notifyProIO.settings.message = ' {product_with_link} {money}';
    notifyProIO.settings.hideMobile = true;
    notifyProIO.settings.initialDelay = 1000; // 1s
    notifyProIO.settings.displayInterval = 10000; // 10s
    notifyProIO.settings.displayHold = 5000; // 7s
    notifyProIO.settings.totalPerPage = 30;
    notifyProIO.settings.totalDisplayed = 0;
    notifyProIO.settings.loop = true;
    notifyProIO.setup(productsProIO);   
  </script>
  
</body>

</html>