import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { items } from '../../data/data';
import { CiHeart } from "react-icons/ci";  
import StarRatingComponent from 'react-rating-stars-component';  
import '../../assert/css/detail.css';  


const ReviewModal = ({ isOpen, onClose, onSubmit, onChange, ratingChanged, newReview }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3 className="form-title">리뷰를 작성해주세요</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="rating">Rating</label>
            <StarRatingComponent
              count={5}
              onChange={ratingChanged}
              size={24}
              isHalf={true}
              value={newReview.rating}
              activeColor="#ffd700"
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Feedback</label>
            <textarea
              id="content"
              name="content"
              rows="4"
              value={newReview.content}
              onChange={onChange}
              placeholder="Write your review here"
              className="form-control"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="attachment">Attachment</label>
            <input
              type="file"
              id="attachment"
              name="attachment"
              onChange={(e) => onChange({ target: { name: 'attachment', value: e.target.files[0] } })}
              className="form-control"
            />
          </div>
          <div className="form-actions">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              취소
            </button>
            <button type="submit" className="btn btn-primary">게시하기</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Detail = () => {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviews, setReviews] = useState([
    { user: 'User1', content: '정말 집에가고 싶은 강의네요.', likes: 350 },
    { user: 'User2', content: '이번 강의는 마음에 들어요 다른 강의도 들어보고 싶어여', likes: 50 },
    { user: 'User3', content: '정말 형편없는 강의네요', likes: 35 },
  ]);

  const [newReview, setNewReview] = useState({ rating: 5, content: '', attachment: null });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const item = items.find((item) => item.id === parseInt(id));

  const toggleReviewModal = () => {
    setShowReviewModal(!showReviewModal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, { user: 'New User', content: newReview.content, likes: 0 }]);
    setShowReviewModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const ratingChanged = (newRating) => {
    setNewReview((prev) => ({
      ...prev,
      rating: newRating,
    }));
  };

  return (
    <div className="detail-page">
      {/* Header Section */}
      <header className="header-section">
        <div className="header-content">
          <img src={item.src} alt="Course Thumbnail" className="course-image" />
          <div className="header-meta">
            <h2 className="course-title">{item.title}</h2>
            <div className="instructor-info">
              <h3 className="instructor-name">강사명: {item.instructor}</h3>
            </div>
            <div className="action-buttons">
              <span className="like-count">
                <CiHeart /> {item.likes} 
              </span>
              <a href={item.link} className="course-link">강의로 이동</a>
              <button className="btn btn-tertiary">찜하기</button>
            </div>
          </div>
        </div>
      </header>

      {/* Review Section */}
      <section className="review-section">
        <div className="review-write">
          <button onClick={toggleReviewModal} className="btn btn-primary">리뷰 작성</button>
        </div>
        <div className="review-list">
          {reviews.map((review, index) => (
            <div key={index} className="review-item">
              <div className="review-user">{review.user}</div>
              <div className="review-content">{review.content}</div>
              <div className="review-likes">
                <CiHeart /> {review.likes} 
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Review Modal */}
      <ReviewModal
        isOpen={showReviewModal}
        onClose={toggleReviewModal}
        onSubmit={handleSubmit}
        onChange={handleChange}
        ratingChanged={ratingChanged}
        newReview={newReview}
      />
    </div>
  );
};

export default Detail;
