import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

export const FeatureContext = createContext([])
export const CategoriesContext = createContext([])
export const BlogContext = createContext([])
export const statisticsContext = createContext([])

const App = () => {
  const { featureData, category, blog, statistic } = useLoaderData()
  return (
    <statisticsContext.Provider value={statistic}>
      <BlogContext.Provider value={blog}>
        <FeatureContext.Provider value={featureData}>
          <CategoriesContext.Provider value={category}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
          </CategoriesContext.Provider>
        </FeatureContext.Provider>
      </BlogContext.Provider>
    </statisticsContext.Provider>
  );
};

export default App;