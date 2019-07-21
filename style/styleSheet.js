import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const color1 = "#707070";
const { width } = Dimensions.get('screen');


let entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const styles = EStyleSheet.create({
    noticeBoard: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: '#FFFFFF',
        height: hp('70%'),
        width: wp('35%'),
        borderRadius: 16,
        padding: '3%'
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    InputStyle: {
        backgroundColor: color1,
        color: 'white',
        borderColor: 'black',
        borderRadius: 16,
        width: "110%",
        height: '10%',
        justifyContent: "center",
        alignItems: "center"
    },
    NumberContainer: {
        width: wp('9%'),
        height: wp('9%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: color1,
        borderRadius: wp('10%'),
        margin: '1%'
    },
    LoginNumber: {
        fontSize: "10rem",
        color: color1
    },

    ViewStyle: {
        flex: 1,
    },
    title: {
        fontSize: '15rem',
    },
    plustitle: {
        fontSize: '20rem',
    },
    subTitle: {
        fontSize: '10rem',
    },
    text: {
        fontSize: '8rem',

    },
    loginBackground: {
        backgroundColor: '#3FAEA3',
        height: "300rem",
        width: "400rem",
        transform: [{ rotate: '43deg' }],
        borderRadius: '30rem',
        position: "absolute",
        zIndex: 1,
        right: '50%',

    },
    LWinfo: {
        fontSize: '6rem',
    },
    menuIcon: {
        fontSize: '15rem',
        color: color1,

    },
    loginLeftSideBackground: {
        backgroundColor: '#D0ECEA',
        height: "100rem",
        width: "100rem",
        transform: [{ rotate: '43deg' }],
        borderRadius: '30rem',
        position: "absolute",
        zIndex: 1,
        left: '95%',
        justifyContent: 'flex-end',

    },
});

export default styles;