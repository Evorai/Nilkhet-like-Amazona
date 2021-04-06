import React from 'react';
import Rating from './SellerPages/Rating';

export default function Book(props) {
    const {book} = props;
    return (
        <div>
            
<div key={book._id} className="card">
<a href={`/book/${book._id}`} >
<img className="medium" src={book.image} alt={book.name} />
</a>
<div className="card-body">
<a href={`/book/${book._id}`} >
  <h3 className="BookName">{book.name}</h3>
</a>
<a href="Shop01.html">
  <h3 className="ShopName">Shopname: {book.shopname} </h3>
</a>
<div className="Review">Shop review:
<Rating 
rating={book.rating}
numReviews={book.numReviews}
></Rating>
 </div>
<div className="location">Address: {book.address}</div>
<div className="price">Price: TK {book.price}</div>
</div>
</div>
        </div>
    )
}

/*
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsBook } from '../actions/bookActions';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
import Rating from './SellerPages/Rating';

export default function Book(props) {
  const dispatch = useDispatch();
  const bookId = props.match.params.id;
  debugger;
  const bookDetails = useSelector((state) => state.bookDetails);
  //const bookId = 
  //var x = props.book;
   // const bookDetails = useSelector((state) => state.bookDetails);
    const { loading, error, book } = bookDetails;

    useEffect (()=> {
      dispatch(detailsBook(bookId));
    }, [dispatch, bookId]);
    return (
      <div>
        {loading? <LoadingBox></LoadingBox>
        :
        error?(<MessageBox variant="danger">{error}</MessageBox>)
      :(<div>
            
        <div key={book._id} className="card">
        <a href={`/book/${book._id}`} >
        <img className="medium" src={book.image} alt={book.name} />
        </a>
        <div className="card-body">
        <a href={`/book/${book._id}`} >
          <h3 className="BookName">{book.name}</h3>
        </a>
        <a href="shop.html">
          <h3 className="ShopName">Shop name: {book.shopname} </h3>
        </a>
        <div className="Review">Shop review:
        <Rating 
        rating={book.rating}
        numReviews={book.numReviews}
        ></Rating>
         </div>
        <div className="location">Address: {book.address}</div>
        <div className="price">Price: TK {book.price}</div>
        </div>
        </div>
                </div>
      )
      }
    
  </div>
        
    )
}
*/