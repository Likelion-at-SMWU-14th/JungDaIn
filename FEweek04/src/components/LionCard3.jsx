import lion3 from '../assets/lion3.png';

const LionCard3 = () => {
    const isReal = false
    return (
        <div>
            <img src={lion3} />
            <h1> 3번 사자 </h1>
            <p>{isReal ? '진짜 아기사자랍니다 !!' 
            : '땡! 저는 가짜 아기사자에요'}</p>
        </div>
    );
};

export default LionCard3;