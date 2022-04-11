import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import Head from "next/head";

const Layout = (props) => {
  return (
    <>
      <Head></Head>
      <div className="">
          <Nav />
        <div className="h-screen bg-[#222] mb-10">{props.children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;




{/* <section class="z-70 sticky top-4 md:top-6 lg:top-8 xl:top-10 2xl:top-14">
    <div class="bg-cream-500 h-10 w-full border border-b-0 border-black order-1 lg:h-12 xl:h-14">
        <ul class="w-full mx-auto flex flex-row justify-center items-center divide-x divide-black max-w-7xl h-full leading-snug text-center text-sm text-black leading-none lg:justify-between xl:text-base">
            
            {% for link in linklists.header-bar.links %}
            <li class="aunderline flex-auto {% if forloop.index != 1 %}hidden lg:block{% endif %}">            
                <a href="{{link.url}}" class="">
                    {{ link.title }}
                </a>
            </li>
            {% endfor %}
        </ul>
    </div>
</section> 

<header class="header sticky top-14 z-60 md:top-16 lg:top-20 xl:top-24 2xl:top-28"> 
    <div class="bg-cream-500 grid grid-cols-6 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-14 lg:grid-cols-12 border border-black">
        <!-- icons block-->
        <div class="header__icons-block lg:col-span-3 lg:order-3 flex">
            <div class="w-full border-r border-black lg:border-l lg:border-black h-16 lg:h-full relative z-10">
            <div class="col-span-3 order-3 h-full">
                <div class="flex items-center justify-center h-full w-full lg:px-6 lg:justify-around 2xl:px-20">
                    {% form 'currency', id: "currency_form_1", class: "currency-selector-form" %}
                        <div class="header__currency">
                            <select name="currency" id="currency" class="pr-4 appearance-none hidden lg:inline-flex bg-transparent font-bold text-base">
                                {% for currency in shop.enabled_currencies %}
                                    {% if currency == cart.currency %}
                                        <option selected="true">{{currency.iso_code}}</option>
                                    {% else %}
                                        <option>{{currency.iso_code}}</option>
                                    {% endif %}
                                {% endfor %}
                            </select>
                        </div>
                    {% endform %}
                    
                    <!-- search icon -->
                    <button class="inline-block hidden lg:inline-flex" data-search-toggle>
                        {% render 'macro-icon', symbol: 'search', size: 'xs' %}
                    </button>

                    <!-- cart icon -->
                    <button data-cart-toggle data-cart-icon class="basket-icon{% if cart.items.size > 0 %} is-active{% endif %}">
                        {% render 'base--basket-icon' %}
                    </button>
                </div>
            </div>
        </div>
        <!-- hamburger -->
        <!-- <button data-hamburger class="hamburger w-16 h-full flex justify-center items-center lg:order-4 lg:w-20 lg:z-20 lg:border-black bg-yellow-500">
            <span></span>
            <span></span>
            <span></span>
        </button> -->
    </div>

        <!-- site logo -->
        <div class="col-span-4 lg:border-none lg:col-span-4 lg:order-2 flex justify-center items-center py-2">
            <a href="https://www.cleverlylaundry.com/" class="inline-block">
                <span class="font-sans title-2 text-black font-black tracking-wide uppercase text-center block leading-logo text-3xl md:text-4xl xl:text-5xl transition-opacity hover:opacity-75 duration-200 ease-in-out">Cleverly<br class="md:hidden lg:inline-block xl:hidden" /><span class="hidden md:inline lg:hidden xl:inline">&#32;</span>Laundry</span>
            </a>
        </div>

        <!-- hamburger -->
        <button data-hamburger class="hamburger w-16 h-full border-l border-black lg:order-4 lg:relative flex justify-center items-center lg:w-20 lg:z-20 lg:border-black">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <!-- site intro -->
        <div class="hidden lg:block col-span-2 lg:col-span-4 border-r border-black lg:flex lg:justify-center lg:items-center">
            <div class="header__site-intro text-center text-sm lg:break-words leading-tight xl:text-base">
                <div>
                {{ settings.notice_text }}
                </div>
            </div>
        </div>
    </div>
    <div class="search-bar" data-search-bar>
        <form class="flex flex-row" action="{{ routes.search_url }}">
            <div class="flex-auto">
                <div class="">
                    <input name="q" value="{{ search.terms | escape }}" type="search" placeholder="Search..." class="h-20 w-full px-4 bg-transparent">
                    <input type="hidden" name="type" value="product" />
                </div>
            </div>
            <div class="flex-initial">
                <button type="submit" class="h-20 px-6 flex items-center justify-center">
                    <span class="uppercase font-bold inline-block">Search</span>
                </button>
            </div>
        </form>
    </div>
</header>

<!-- site intro on mobile, because this one isn't sticky -->
<div class="border lg:hidden -mt-px bg-cream-500 h-14 sm:h-10 lg:h-full w-full p-3 flex items-center justify-center border-black flex lg:border-none lg:order-1 lg:relative lg:z-20 lg:w-3/10 xl:w-1/4 xl:px-6 2xl:w-2/10">
    <div class="header__site-intro text-center text-sm lg:break-words leading-tight">
        {{settings.notice_text}}
    </div>
</div> */}

//  &__icons-block {
//         @apply w-16;

//         @screen lg {
//             width: calc(100% - 20px);
//         }

//         @screen xl {
//             width: calc(100% - 60px);
//         }
//     }



// OG press logo code

// <!-- <div class="gutter">
// <section class="pb-5 xl:h-56 col-span-6 order-10 lg:10 bg-black">
//     <div class="flex flex-wrap items-center justify-evenly px-3">
//         <p class="w-full text-white text-center font-slab font-bold text-base uppercase pt-9 pb-1">As Featured in</p> -->

//         {% comment %}
//         <div class="brandlogo">
//             {% render 'macro-icon', symbol: 'esquirelogo', size: 'xl' %}
//         </div>

//         <div class="brandlogo">
//             {% render 'macro-icon', symbol: 'glamour', size: 'xl' %}
//         </div>
//         {% endcomment %}
       
//         <!-- <div class="brandlogo">
//             {% render 'macro-icon', symbol: 'cl_goop_logo', size: 'xl' %}
//         </div> -->

//         {% comment %}
//         <div class="brandlogo">
//             {% render 'macro-icon', symbol: 'gq', size: 'xl' %}
//         </div>
//         {% endcomment %}

//         <!-- <div class="brandlogo">
//             {% render 'macro-icon', symbol: 'cl_mrporter_logo', size: 'xl' %}
//         </div>

//         <div class="brandlogo">
//             {% render 'macro-icon', symbol: 'cl_nytimes_logo', size: 'xl' %}
//         </div>
    
//         <div class="brandlogo">
//             {% render 'macro-icon', symbol: 'cl_tmag_logo', size: 'lg' %}
//         </div>

//         <div class="brandlogo">
//             {% render 'macro-icon', symbol: 'cl_wmag_logo', size: 'lg' %}
//         </div>
            
//     </div>
// </section>
// </div> -->