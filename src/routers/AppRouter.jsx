import { Basket } from "components/basket";
import { Footer, Navigation } from "components/common";
import ScrollTopButton from "components/common/ScrollTopButton";
import * as ROUTES from "constants/routes";
import { createBrowserHistory } from "history";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import * as view from "views";
import AdminRoute from "./AdminRoute";
import ClientRoute from "./ClientRoute";
import PublicRoute from "./PublicRoute";

// Revert back to history v4.10.0 because
// v5.0 breaks navigation
export const history = createBrowserHistory();

const AppRouter = () => {
  const [showButton, setShowButton] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, [])
	
  return (
    <Router history={history}>
      <>
        <Navigation />
        <Basket />
        <Switch>
          <Route component={view.Search} exact path={ROUTES.SEARCH} />
          <Route component={view.Home} exact path={ROUTES.HOME} />
          <Route component={view.Shop} exact path={ROUTES.SHOP} />
					<Route
						component={view.Contact}
						exact
						path={ROUTES.CONTACT}
					/>
          <Route
            component={view.FeaturedProducts}
            exact
            path={ROUTES.FEATURED_PRODUCTS}
          />
          <Route
            component={view.RecommendedProducts}
            exact
            path={ROUTES.RECOMMENDED_PRODUCTS}
          />
          <Route component={view.Shop} path={ROUTES.KEYWORDED_SHOP} />
          <Route component={view.Contact} path={ROUTES.CONTACT} />
        
          <Route component={view.Blogs} exact path={ROUTES.BLOGS} />
          <Route
            component={view.Blogs_detail}
            exact
            path={ROUTES.BLOGS_DETAIL}
          />
					<Route
						component={view.Shop}
						path={ROUTES.KEYWORDED_SHOP}
					/>
          <PublicRoute component={view.SignUp} path={ROUTES.SIGNUP} />
          <PublicRoute component={view.SignIn} exact path={ROUTES.SIGNIN} />
          <PublicRoute
            component={view.ForgotPassword}
            path={ROUTES.FORGOT_PASSWORD}
          />
          <Route component={view.ViewProduct} path={ROUTES.VIEW_PRODUCT} />
          <ClientRoute
            component={view.UserAccount}
            exact
            path={ROUTES.ACCOUNT}
          />
          <ClientRoute
            component={view.EditAccount}
            exact
            path={ROUTES.ACCOUNT_EDIT}
          />
          <ClientRoute
            component={view.CheckOutStep1}
            path={ROUTES.CHECKOUT_STEP_1}
          />
          <ClientRoute
            component={view.CheckOutStep2}
            path={ROUTES.CHECKOUT_STEP_2}
          />
          <ClientRoute
            component={view.CheckOutStep3}
            path={ROUTES.CHECKOUT_STEP_3}
          />
          <AdminRoute
            component={view.Dashboard}
            exact
            path={ROUTES.ADMIN_DASHBOARD}
          />
          <AdminRoute component={view.Products} path={ROUTES.ADMIN_PRODUCTS} />
          <AdminRoute component={view.AddProduct} path={ROUTES.ADD_PRODUCT} />

          <AdminRoute
            component={view.EditProduct}
            path={`${ROUTES.EDIT_PRODUCT}/:id`}
          />
          <AdminRoute component={view.News} exact path={ROUTES.ADMIN_NEWS} />
          <AdminRoute component={view.AddNews} exact path={ROUTES.ADD_NEWS} />
          <AdminRoute component={view.EditNews} path={ROUTES.EDIT_NEWS} />
          <AdminRoute
            component={view.ContactList}
            exact
            path={ROUTES.ADMIN_CONTACT}
          />
          <AdminRoute
            component={view.SeeContact}
            exact
            path={ROUTES.SEE_CONTACT}
          />
          <PublicRoute component={view.PageNotFound} />
        </Switch>
        {showButton && <ScrollTopButton />}
        <Footer />
      </>
    </Router>
  );
};

export default AppRouter;
