// import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { Row, Col } from 'react-bootstrap'
// import Product from '../components/Product'
// import Message from '../components/Message'
// import Loader from '../components/Loader'
// import Paginate from '../components/Paginate'
// import ProductCarousel from '../components/ProductCarousel'
// import Meta from '../components/Meta'
// import { listProducts } from '../actions/productActions'

// const HomeScreen = ({ match }) => {
//   const keyword = match.params.keyword

//   const pageNumber = match.params.pageNumber || 1

//   const dispatch = useDispatch()

//   const productList = useSelector((state) => state.productList)
//   const { loading, error, products, page, pages } = productList

//   useEffect(() => {
//     dispatch(listProducts(keyword, pageNumber))
//   }, [dispatch, keyword, pageNumber])

//   return (
//     <>
//       <Meta />
//       {!keyword ? (
//         <ProductCarousel />
//       ) : (
//         <Link to='/' className='btn btn-light'>
//           Go Back
//         </Link>
//       )}
//       <h1>Latest Products</h1>
//       {loading ? (
//         <Loader />
//       ) : error ? (
//         <Message variant='danger'>{error}</Message>
//       ) : (
//         <>
//           <Row>
//             {products.map((product) => (
//               <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
//                 <Product product={product} />
//               </Col>
//             ))}
//           </Row>
//           <Paginate
//             pages={pages}
//             page={page}
//             keyword={keyword ? keyword : ''}
//           />
//         </>
//       )}
//     </>
//   )
// }

// export default HomeScreen

























import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'
import FilterPanel from '../components/FilterPanel/FilterPanel'
// import './HomeScreen.css'

const HomeScreen = ({ match }) => {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList
  const [list, setList] = useState(productList);



  const [locations, setlocations] = useState([
    { id: 1, checked: false, label: 'Altstadt' },
    { id: 2, checked: false, label: 'Bahnstadt' },
    { id: 3, checked: false, label: 'Bergheim' },
    { id: 4, checked: false, label: 'Boxberg' },
    { id: 5, checked: false, label: 'Emmerts-grund' },
    { id: 6, checked: false, label: 'Handschuhsheim' },
    { id: 7, checked: false, label: 'Kirchheim' },
    { id: 8, checked: false, label: 'Neuenheim' },
    { id: 9, checked: false, label: 'Pfaffengrund' },
    { id: 10, checked: false, label: 'Rohrbach' },
    { id: 11, checked: false, label: 'Schlierbach' },
    { id: 12, checked: false, label: 'Südstadt' },
    { id: 13, checked: false, label: 'Weststadt' },
    { id: 14, checked: false, label: 'Wieblingen' },
    { id: 15, checked: false, label: 'Ziegelhausen' },
  ]);

  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);
  

    const handleChangeChecked = (id) => {
      const locationsStateList = locations;
      const changeCheckedlocations = locationsStateList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );
      setlocations(changeCheckedlocations);
      // console.log(changeCheckedlocation);
    };




  const applyFilters = () => {
    let updatedList = productList.products;
    console.log(updatedList);

    // Category Filter
    if (selectedCategory) {
      updatedList = updatedList.filter((item) =>
        item.category === selectedCategory
      );
      // console.log(updatedList);
    }

    // Location Filter
    const locationsChecked = locations
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (locationsChecked.length) {
      updatedList = updatedList.filter((item) =>
        locationsChecked.includes(item.location)
      );
      // console.log(updatedList);
    }

    setList(updatedList);
    // console.log(list)

    // !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFilters();
    // console.log(list)
    // console.log(products)
  }, [selectedCategory, locations]);





  
  
  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
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
            {/* filter pannel */}
            <Col>
              <div className='home_panel-wrap'>
                <FilterPanel
                  selectedCategory={selectedCategory}
                  selectCategory={handleSelectCategory}
                  // locations={locations}
                  changeChecked={handleChangeChecked}
                />
              </div>
            </Col>

            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
            
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  )
}

export default HomeScreen
