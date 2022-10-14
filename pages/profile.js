import React from 'react';
import styles from '../styles/profile.module.css';
import Layout from '../components/Layout';

export default function profile() {
  return (
    <Layout title="profile">
      <h1 className={styles.h1}>자기소개</h1>
      <div className={styles.card_box}>
        <div className={styles.card}>
          <div className={styles.profile}>
            <div>
              <h3 className="text-xl">박범주</h3>
              Park Beom Ju
            </div>
          </div>
          <p>
            생년월일 : 1999/09/07
            <br />
            <br />
            학교: 중부대학교 고양캠퍼스
            <br />
            학과: 정보보호학전공
            <br />
            학번: 91812323 <br />
            이메일: bzpark@naver.com
            <br />
            <br />
            전공 웹프로젝트 NextShop 입니다. <br />
            <br />
          </p>
        </div>
      </div>
    </Layout>
  );
}
