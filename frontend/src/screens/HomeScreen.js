import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import Loader from '../components/Loader';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { useParams } from 'react-router-dom';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  const params = useParams();
  const { keyword, pageNumber } = params;
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to={'/'} className='btn btn-dark'>
          Go Back
        </Link>
      )}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          ></Paginate>
        </>
      )}
    </>
  );
};

export default HomeScreen;
