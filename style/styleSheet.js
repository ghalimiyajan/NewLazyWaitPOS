import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const color1 = "#707070";
const color2 = "#3FAEA3";
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
        height: hp('65%'),
        width: wp('35%'),
        borderRadius: 16,
        padding: '3%'
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    numberContainer: {
        width: wp('9%'),
        height: wp('9%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: color1,
        borderRadius: wp('10%'),
        margin: '1%'
    },
    loginNumber: {
        fontSize: "10rem",
        color: color1
    },
    title: {
        fontSize: '12rem',
    },
    plustitle: {
        fontSize: '20rem',
    },
    subTitle: {
        fontSize: '8rem',
    },
    text: {
        fontSize: '7rem',

    },
    versionNumber: {
        fontSize: '5rem',

    },
    loginLeftSideBackground: {
        backgroundColor: color2,
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
        right: '60%',

    },
    loginRightSideBackground: {
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
    dashboardHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    dashboardBodyContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    dashboardFooterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    dashboardItem_h: {
        backgroundColor: 'white',
        borderRadius: 16,
        margin: '5rem',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dashboardItem_v: {
        backgroundColor: 'white',
        borderRadius: 16,
        margin: '5rem'

    },
    dashboardItemContainer: {
        flexDirection: 'row',
    },
    dashboardItemInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    alignRight: {
        justifyContent: 'flex-start',
    },
    flexCenter: {
        alignItems: 'center',
    },
    flexRow: {
        flexDirection: 'row',
    },
    flex1: {
        flex: 1,
    },
    flex01: {
        flex: 0.1,
    },
    flex02: {
        flex: 0.2,
    },
    flex03: {
        flex: 0.3,
    },
    flex04: {
        flex: 0.4,
    },
    flex05: {
        flex: 0.5,
    },
    flex06: {
        flex: 0.6,
    },
    flex07: {
        flex: 0.7,
    },
    flex08: {
        flex: 0.8,
    },
    flex09: {
        flex: 0.9,
    },
    p_1: {
        padding: '1rem',
    },
    p_2: {
        padding: '2rem',
    },
    p_3: {
        padding: '3rem',
    },
    p_4: {
        padding: '4rem',
    },
    p_5: {
        padding: '5rem',
    },
    p_6: {
        padding: '6rem',
    },
    p_7: {
        padding: '7rem',
    },
    p_8: {
        padding: '8rem',
    },
    p_9: {
        padding: '9rem',
    },
    p_10: {
        padding: '10rem',
    },
    fs_1: {
        fontSize: '1rem',
    },
    fs_2: {
        fontSize: '2rem',
    },
    fs_3: {
        fontSize: '3rem',
    },
    fs_4: {
        fontSize: '4rem',
    },
    fs_5: {
        fontSize: '5rem',
    },
    fs_6: {
        fontSize: '6rem',
    },
    fs_7: {
        fontSize: '7rem',
    },
    fs_8: {
        fontSize: '8rem',
    },
    fs_9: {
        fontSize: '9rem',
    },
    fs_10: {
        fontSize: '10rem',
    },
    fs_13: {
        fontSize: '13rem',
    },

    mainBackgroundColor: {
        backgroundColor: '#F6F6F8',
    },
    circleBotton: {
        width: wp('5%'),
        height: wp('5%'),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color2,
        borderRadius: wp('10%'),
        margin: '1%'
    },
    whiteFont: {
        color: 'white',
    },
    LWinfo: {
        fontSize: '4rem',
    },
    menuIcon: {
        fontSize: '15rem',
        color: color1,

    },
    dashboardLine: {
        borderBottomWidth: 4,
        width: 80,
        borderRadius: 100,
        borderColor: color2
    }
});

export default styles;