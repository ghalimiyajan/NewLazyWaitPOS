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
        height: '100%',
        width: '120rem',
        borderRadius: 16,
        padding: '3%'
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    numberContainer: {
        width: '30rem',
        height: '30rem',
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
        fontSize: '10rem',
    },
    plustitle: {
        fontSize: '15rem',
    },
    subTitle: {
        fontSize: '7rem',
    },
    text: {
        fontSize: '6rem',

    },
    versionNumber: {
        fontSize: '4rem',
        color: '#484C4F',

    },
    menulist: {
        fontSize: '6rem',
        textAlign: 'center',
        color: color1,


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
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dashboardBodyContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    dashboardFooterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    fs_20: {
        fontSize: '20rem',
    },

    mainBackgroundColor: {
        backgroundColor: '#F6F6F8',
    },
    circleBotton: {
        width: "20rem",
        height: "20rem",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color2,
        borderRadius: "20rem",
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
    sidebarIcon: {
        fontSize: '8rem',
        color: 'black'
    },
    homeIcon: {
        fontSize: '12rem',
        color: 'black'
    },
    trashIcon: {
        fontSize: '12rem',
        color: 'black',
        alignSelf: 'center',

    },
    IconsView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F3F3F3',
        borderRadius: 10,
        height: '20rem',
        width: '20rem',
        margin: 10,
    },



    dashboardLine: {
        borderBottomWidth: 4,
        width: 80,
        borderRadius: 100,
        borderColor: color2
    },
    sidebarBoxes: {
        backgroundColor: '#fff',
        borderRadius: 16,
        margin: '2rem',
        marginTop: 0,
        width: '25rem',
        height: '25rem',
        justifyContent: 'center',
        alignItems: 'center',

    },
    imagePickerCircle: {
        width: '60rem',
        height: '60rem',
        borderRadius: '30rem',
        borderWidth: 1,
        borderColor: color1,
        margin: '5%'
    },
    imagePickerSquare: {
        width: '70rem',
        height: '70rem',
        backgroundColor: '#F3F3F3',
        borderRadius: 10
    },
    imagePickerSquareView: {
        width: '70rem',
        height: '70rem',
        backgroundColor: '#F3F3F3',
        borderRadius: 10,


    },
    lwPic: {
        borderWidth: 1,
        height: '30rem',
        width: '30rem',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderColor: color1

    },
    textInput: {
        margin: '1%',
        width: '110rem',
        height: '18rem',
        backgroundColor: '#F3F3F3',
        borderRadius: 16
    },
    mTextInput: {
        margin: '1%',
        width: '90rem',
        height: '16rem',
        backgroundColor: '#F3F3F3',
        borderRadius: 16
    },
    smallTextInput: {
        margin: '1%',
        width: '100%',
        height: '100%',
        backgroundColor: '#F3F3F3',
        borderRadius: 10
    },

    personImage: {
        width: "20rem",
        height: "20rem",
        borderRadius: 100,
        borderColor: color2,
        margin: 10
    },
    commentInput: {
        height: '30rem',
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#F3F3F3',
        padding: 10,


    },
    colorPalette: {
        fontSize: '10rem',
        // color: '#59C9BF'
    },
    fs_7rem: {
        fontSize: '7rem',
    },
    square: {
        width: '30rem',
        height: '15rem',
        backgroundColor: '#F3F3F3',
        borderRadius: 10, 
        margin:10,
        justifyContent:'center', 
        alignItems:'center',
    },
    activeSquare: {
        width: '25rem',
        height: '15rem',
        backgroundColor: '#48C4B7',
        borderRadius: 16

    },
    unactiveSquare: {
        width: '35rem',
        height: '20rem',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#707070',

    },
    usersCards: {
        width: '60rem',
        height: '60rem',
        backgroundColor: '#E6E6E6',
        borderRadius: 16, 
        padding:10,

    },
    sidebar: {
        backgroundColor: '#E6E6E6',
        width: '100%',
        height: '100%',
        borderRadius: 16,
        flex:1,

    },
    greenTag: {
        backgroundColor: '#3FAEA3',
        height: '16rem',
        width: '13rem',
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute'
    },
    userImage: {
        width:'18rem', 
        height:'18rem', 
        borderRadius:'9rem'
    },
    checkbox:{
        width: '8rem', 
        height: '8rem', 
        borderWidth: 0.5,
    },


});

export default styles;