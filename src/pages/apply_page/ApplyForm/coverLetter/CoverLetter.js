import React from 'react';

import './CoverLetter.css';

import star from '../basicinfo/requiredInput.png';
import InputBox from './InputBox';

const CoverLetter = () => {
    return (
        <div
            className="CoverLetter"
        >
            <div
                className="CoverLetterBox"
            >
                <div
                    className="CoverLetterTitle mainTitle"
                >자기소개서</div>
                <div
                    className="ApplicationLine"
                />
                <div
                    className="CoverLetterContent mainContent"
                >
                    지원자 분을 잘 알 수 있도록 자신을 자유롭게 표현해주세요.
                </div>
            </div>
            <div
                className="CoverLetterBox"
            >
                <div
                    className="CoverLetterTitle lowerTitle"
                >
                    자기소개를 적어주세요.
                    <img src={star} className="star"/>
                </div>
                <div
                    className="CoverLetterContent lowerContent"
                >
                    관심분야, 취미, 특기, 성격, 경험 등 컴퓨터와 관련된 내용이 아니어도 됩니다. 200자 이상
                </div>
                <InputBox/>
            </div>
            <div
                className="CoverLetterBox"
            >
                <div
                    className="CoverLetterTitle lowerTitle"
                >
                    지원동기를 적어주세요.
                    <img src={star} className="star"/>
                </div>
                <div
                    className="CoverLetterContent lowerContent"
                >
                    100자 이상
                </div>
                <InputBox/>
            </div>
            <div
                className="CoverLetterBox"
            >
                <div
                    className="CoverLetterTitle lowerTitle"
                >
                    CSPC에 들어와서 하고 싶은 것 혹은 배우고 싶은 것은 무엇인가요?
                    <img src={star} className="star"/>
                </div>
                <div
                    className="CoverLetterContent lowerContent"
                >
                    50자 이상
                </div>
                <InputBox/>
            </div>
            <div
                className="CoverLetterBox"
            >
                <div
                    className="CoverLetterTitle lowerTitle"
                >
                    다른 하시고 싶은 말씀이 있으시면 자유롭게 적어주세요.
                </div>
                <div
                    className="CoverLetterContent lowerContent"
                >
                    선택사항입니다.
                </div>
                <InputBox/>
            </div>
        </div>
    );
};

export default CoverLetter;