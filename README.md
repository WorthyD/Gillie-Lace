#Gillie-Lace - Micro CSS Responsive Framework

```
gil·lie - /ˈgilē/ -- a type of shoe with laces along the instep and no tongue, 
especially those used for Scottish country dancing. 
```
<a href="http://en.wikipedia.org/wiki/Ghillies_(dance)">Gillies</a>

Gillie-Lace is designed to be a micro-framework alternative to <a href="http://getbootstrap.com">Bootstrap</a>. It is designed to provide the absolute essentials to start a responsive website. Don't be fooled, behind the 4K minified css is 100K of kilts, bagpipes and bad@$$ery.  

This framework's goal is to not create a complete website experience. It is to provide the absolute core needs of a responsive grid.

#CSS
##Box-Sizing Model
A reset is not included in this framework, but we do set the global ```box-sizing``` property to ``border-box`` to ensure our objects maintain set widths.

##Grid System
Our grid system is based off of Bootstrap's.  It should be easy to understand if you have worked inside Bootstrap's code.  It's based on a 12 column grid, but can be easily updated from the `less` variables file.
###.row
No special rules around this outside of implementing a clear fix around it.
###.col
This is where we deviate from bootstrap. Any and all columns will require a `col` class.  It sets the positioning and min height of all columns.
###.xs-#, .sm-#, .md-#, & .lg-# 
Column classes are very similarly based off of Bootstrap's. They contain the same width behaviors.  How does our framework differ in a code comparison?

```
<!--Bootstrap-->
<div class="row">
    <div class="col-lg-3 col-md-4 col-sm-6">
        <!--Code-->
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6">
        <!--Code-->
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6">
        <!--Code-->
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6">
        <!--Code-->
    </div>
</div>
<!--Gillie Lace-->
<div class="row">
    <div class="col lg-3 md-4 sm-6">
        <!--Code-->
    </div>
     <div class="col lg-3 md-4 sm-6">
        <!--Code-->
    </div>
      <div class="col lg-3 md-4 sm-6">
        <!--Code-->
    </div>
     <div class="col lg-3 md-4 sm-6">
        <!--Code-->
    </div>
</div>
```
You're probably thinking "Well that's stupid. You are only saving X number of characters." My response: Every little bit helps.  It's called a micro optimized framework.  I save bits when I can.

###.visible-** & .hidden-**
Straight from Bootstrap.

###.clear-fix
Why not?

##Possible future features
* Column ordering
 * _I've only used this a couple of times in Bootstrap. Not sure if it's a full feature I want just yet_
* Offsetting columns
 * _Same as above feature_

##What Gillie Lace does not have, and probably wont
Most of these will be excluded because they are too closely tied to the overall theme of a website and can vary way too much.
* Typography
* Table Themes
* Stylized inputs
* Stylized buttons
* Glyphicons
 * I'm not a fan of custom fonts due to performance issues.  
* Helper comonents liek nav bars, drop downs, or jumbotrons.
* Javascript components or widgets
 * If I decide to do any of these. They will be designed to be extremely minimal and package based.

##Coming Soon
* Browser Support
* Examples
* Better documentation

##Authors
__Daniel Worthy__ <br />
Website: <a href="http://worthyd.com">Worthyd.com</a><br />
Twitter: <a href="https://twitter.com/WorthyD/">@WorthyD</a><br />
Github: <a href="https://github.com/WorthyD">WorthyD</a><br />

