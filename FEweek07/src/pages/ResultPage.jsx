import { Link } from 'react-router-dom';

const ResultPage = () => {
    return (
        <div className='quiz-container'>
            <h1>퀴즈 결과</h1>
            <div className='results-section'>
                <p>수고하셨습니다!</p>
                <div className='button-group'>
                    <Link to="/" className='link-btn'>
                        다시 풀기
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ResultPage;