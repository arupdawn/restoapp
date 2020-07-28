import React, { Component } from 'react';
import Menu from "./Menu";
import Footer from "./Footer";
import FoodMenuSection from "./FoodMenuSection";
import PageHeaderSection from "./PageHeaderSection";
import AboutSection from "./AboutSection";

class BlogPage extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <PageHeaderSection title="Blogs"/>
        <h2 className="BlogHeader">Blog</h2>
        <div className="BlogContent">

            <div id="Blog1" className="Blog">
                <div className="BlogMain">
                <h5><strong>Liquid Smoke Is a Magical Ingredient for Smoky Flavor Without a Grill</strong></h5>
                <h6>Post by Joe Miller | Updated: 2 days ago</h6>
                <p>Want smoky flavor without firing up the grill or backyard smoker? Liquid smoke is just the 
                    ingredient for that! A petite bottle of liquid smoke can give you years of rich, smoky flavor
                    from a single bottle and it has a surprising number of uses ...</p>
                 <button type="button" class="btn btn-outline-danger">Read More</button>
                </div>
            </div>

            <div id="Blog2" className="Blog">
                <div className="BlogMain">
                <h5><strong>The Secret to Grilling Burgers That Are Always Tender and Juicy</strong></h5>
                <h6>Post by Meghan Splawn | May 24, 2020</h6>
                <p>Loading up your grill with burgers seems like a no-brainer — everyone loves a grilled burger piled 
                    high with cheese and pickles and slathered with mayo and ketchup. But for the novice grill cook, 
                    burgers can be surprisingly difficult. Their wide surface area ...</p>
                 <button type="button" class="btn btn-outline-danger">Read More</button>
                </div>
            </div>

            <div id="Blog3" className="Blog">
                <div className="BlogMain">
                <h5><strong>Gnocchi Chicken & Dumplings Is the Definition of Comfort Food.</strong></h5>
                <h6>Post by John David | May 20, 2020</h6>
                <p>Comfort food is on the top of our minds these days.Chicken and dumplings is a well-loved Southern meal 
                    typically made with biscuit-like dumplings. Here, potato gnocchi — which are dumplings in their own 
                    right — take their place. That gives this Dutch oven dinner Italian flair while still remaining ...  </p>
                 <button type="button" class="btn btn-outline-danger">Read More</button>
                </div>
            </div>

            <div id="Blog4" className="Blog">
                <div className="BlogMain">
                <h5><strong>This Garlicky Beef “Put on Everything” Sauce Is a Weeknight Secret Weapon.</strong></h5>
                <h6>Post by Vikram Kapoor | May 18, 2020</h6>
                <p>This creamy beef sauce is a bit magical. Let browned ground beef bathe in a mix of Campbell’s® Cream of 
                    Mushroom Soup and Pacific Foods® Organic Free-Range Chicken Broth and it’s easy to see why.It’s a rich 
                    sauce that’s so full of flavor ...</p>
                 <button type="button" class="btn btn-outline-danger">Read More</button>
                </div>
            </div>

            <div id="Blog5" className="Blog">
                <div className="BlogMain">
                <h5><strong>This Crispy Beef and Parmesan Baked Risotto Is Surprisingly Low-Maintenance</strong></h5>
                <h6>Post by Genelia R | Updated: 3 days ago</h6>
                <p>A warm, creamy bowl of risotto is always a must-order for us when we see it on the menu at an Italian 
                    restaurant. It’s one of those dishes that feels like a real treat to order because it’s intimidating 
                    to make a home.</p>
                 <button type="button" class="btn btn-outline-danger">Read More</button>
                </div>
            </div>

            <div id="Blog6" className="Blog">
                <div className="BlogMain">
                <h5><strong>There’s No Wrong Way to Enjoy This Extra-Creamy Slow Cooker Chicken Ragu Sauce</strong></h5>
                <h6>Post by Shadab Khan | Updated: 1 day ago</h6>
                <p>Creamy is good, but we think extra-creamy is even better. That’s why this chicken ragu is sure to be 
                    a new family favorite.This sauce is perfectly hands-off, thanks to your slow cooker. When you nestle boneless, 
                    skinless chicken thighs in a mix ... </p>
                 <button type="button" class="btn btn-outline-danger">Read More</button>
                </div>
            </div>

        </div>
        <Footer />
      </div>
    )
  }
}

export default BlogPage;