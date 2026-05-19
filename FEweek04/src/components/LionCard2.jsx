import lion2 from '../assets/lion2.png';

const LionCard2 = () => {
    const isReal = true
    return (
        <div>
            <img src={lion2} />
            <h1> 2번 사자 </h1>
            <p>{isReal ? '진짜 아기사자랍니다 !!' 
            : '땡! 저는 가짜 아기사자에요'}</p>
        </div>
    );
};

export default LionCard2;