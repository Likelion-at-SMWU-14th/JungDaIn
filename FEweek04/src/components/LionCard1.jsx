import lion1 from '../assets/lion1.png';

const LionCard1 = () => {
    const isReal = true
    return (
        <div
            style={{
                width: '280px',
                padding: '20px',
                borderRadius: '20px',
                backgroundColor: '#fff',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                textAlign: 'center',
                margin: '20px auto',
            }}
        >
            <img 
                src={lion1}
                style={{width: '100%', height:'300px', objectFit:'cover', borderRadius:'16px'}} 
            />
            <h1 style={{fontSize:'24px', color:'#333'}}> 1번 사자 </h1>
            <p style={{fontSize:'16px', color:'#555'}}>
                {isReal ? '진짜 아기사자랍니다 !!' : '땡! 저는 가짜 아기사자에요'}
            </p>
        </div>
    );
};

export default LionCard1;