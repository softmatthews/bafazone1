<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>
     <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&amp;display=swap" rel="stylesheet">    
  <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet">  
  
    <!-- CSS ================================================== -->
    <link href="assets/css/owl.carousel.min.css" rel="stylesheet" type="text/css" media="all">
    <link href="../../maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" >    
    <link href="assets/css/timber.scss.css" rel="stylesheet" type="text/css" media="all">
    <link href="assets/css/theme.scss.css" rel="stylesheet" type="text/css" media="all">
    <link href="assets/css/themepunch.revolution.css" rel="stylesheet" type="text/css" media="all">  
    <link href="assets/css/megastore.scss.css" rel="stylesheet" type="text/css" media="all"> 
    <link href="assets/css/slick.css" rel="stylesheet" type="text/css" media="all">
  <link href="assets/css/rating.css" rel="stylesheet" type="text/css" media="all">




    <!-- JS ================================================== -->    
    <script src="assets/js/jquery.min.js"></script> 
    <script src="assets/js/jquery-ui.min.js"></script> 
    <script src="assets/js/jquery.fancybox.min.js" defer=""></script>  
    <script src="assets/js/modernizr.min.js"></script>            
    <script src="assets/js/jquery.easytabs.min.js"></script> 
    <script src="assets/js/jquery-shuffle.js"></script> 
    <script src="assets/js/owl.carousel.min.js"></script>      
    <script src="assets/js/jquery.themepunch.plugins.min.js"></script> 
    <script src="assets/js/jquery.themepunch.revolution.min.js"></script> 
    <script src="assets/js/jquery.countdown.plugins.js" type="text/javascript"></script>
    <script src="assets/js/jquery.countdown.js" type="text/javascript"></script>
    <script src="assets/js/slick.min.js" type="text/javascript"></script>
  <script src="assets/js/jquery.elevateZoom-3.0.8.min.js" type="text/javascript"></script>
  <script src="assets/js/tada.js" type="text/javascript"></script> 

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

</head>
<body id="megastore-red" class="megastore template-index" style="position: relative; min-height: 100%; top: 0px;">
    <p>Hey vue test</p>
    <div  class="container" >
        <div class="index-sections">
                <div class="html-section index-section product-in-slider">
                    <div class="wrapper">
                        <div class="page-width section-product-deals" style="padding-top:40px; padding-bottom:40px;">
                            <div class="section-header ">      
                                <h2>Flash Deals</h2>      
                                <div class="countdown">
                                    <div class="timer-countdown">
                                        <span id="timer-1525446629879" class="timer"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid--uniform grid--view-items ">
                                <div class="product-slider-1525446629879" id="app">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        @yield('content')
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