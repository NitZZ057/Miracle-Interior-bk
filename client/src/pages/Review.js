import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import '../styles/review.css'
import { Rate } from 'antd';
import { useAuth } from '../context/auth'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Review = () => {
    const [value, setValue] = useState(0);
    const [feedBack, setFeedBack] = useState('');
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();


    const submitReview = async (e) => {
        e.preventDefault()
        const data = {
            value: value,
            feedBack: feedBack,
            user: auth.user,
            token: auth.token
        }
        const res = await axios.post('/api/v1/review/submit-review', data)

        if (res.data.success) {
            navigate('/')
        }


    }


    return (
      <Layout>
        <div className="review-container">
          <div className="review">
            <h1>Give Review</h1>
            <p>Rating</p>
            <form action="" className="review-form" onSubmit={submitReview}>
              <div className="rate">
                <Rate
                  allowHalf
                  onChange={(e) => setValue(e)}
                  defaultValue={value}
                />
                {value ? (
                  <span className="ant-rate-text">{value} stars</span>
                ) : (
                  ""
                )}
              </div>
              <div className="feed-back">
                <textarea
                  className="feed-text"
                  name=""
                  id=""
                  cols="30"
                  rows="4"
                  placeholder="Write your review here"
                  onChange={(e) => setFeedBack(e.target.value)}
                ></textarea>
              </div>

              <div>
                <button className="review-btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    );
}

export default Review