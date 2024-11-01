import React, { useEffect, useState } from 'react';
import '../../../assert/kakao.css';

const kakaoLoginButton = '/img/kakao_login_medium_narrow.png';

const KakaoLogin = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [newNickname, setNewNickname] = useState('');

  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init('');
    }
  }, []);

  const handleLogin = () => {
    window.Kakao.Auth.login({
      scope: 'profile_nickname',
      success: function (authObj) {
        window.Kakao.API.request({
          url: '/v2/user/me',
          success: res => {
            const kakao_account = res.kakao_account;
            setUserInfo({
              nickname: kakao_account.profile.nickname,
            });
            setIsPopupVisible(true);

            console.log(authObj)
            console.log(kakao_account)
          },
          fail: function (error) {
            console.error(error);
          },
        });
      },
    });
  };

 

  const handleNicknameChange = () => {
    setUserInfo((prev) => ({ ...prev, nickname: newNickname }));
    setIsPopupVisible(false);
  };

  useEffect(() => {
    if (userInfo && !isPopupVisible) {
      console.log(userInfo);
    }
  }, [userInfo, isPopupVisible]);


  return (
    <div>
      {!userInfo ? (
        <img
          src={kakaoLoginButton}
          alt="카카오 로그인"
          onClick={handleLogin}
          style={{ cursor: 'pointer' }}
        />
      ) : (
        <div className='user-nickname'>
          <p>{userInfo.nickname}</p>
        </div>
      )}

      <div className={`popup ${isPopupVisible ? 'visible' : ''}`}>
        <h3>닉네임 설정</h3>
        <input
          type="text"
          value={newNickname}
          onChange={(e) => setNewNickname(e.target.value)}
          placeholder="닉네임 입력"
        />
        <button onClick={handleNicknameChange}>변경</button>
        <button onClick={() => setIsPopupVisible(false)}>취소</button>
      </div>
    </div>
  );
};

export default KakaoLogin;
