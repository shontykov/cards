import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ReactGA from "react-ga";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      main: {
          padding: '32px 52px',
          maxWidth: 1280,
          margin: '0 auto'
      },
      title: {
          fontSize: 48,
          fontWeight: 'bold',
          marginBottom: 32,
          [theme.breakpoints.down('md')]: {
            fontSize: 36,
          },
          [theme.breakpoints.down('sm')]: {
            fontSize: 24,
          }
      },
      card: {
          padding: '60px 60px 30px 60px',
          backgroundColor: '#FAFAFA',
          borderRadius: 8,
          marginBottom: 50,
          transform: 'scale(.9825)',
          transition: 'box-shadow .19s ease-out 0s,transform .19s ease-out 0s',
          '&:hover': {
            boxShadow: '0 4px 20px 0 rgba(34,52,70,.1)',
            transform: 'scale(1)',
          },
          [theme.breakpoints.down('md')]: {
            padding: '30px',
          },
          color: '#141414',
          '& > div > img': {
              width: '95%',
              [theme.breakpoints.down('md')]: {
                marginBottom: 10
              },
          },
          '& > div > h1': {
              fontSize: 28,
              margin: '0 0 16px 0',
              fontWeight: 'bold',
              [theme.breakpoints.down('md')]: {
                fontSize: 24,
                marginBottom: 10
              },
              '& > span.chip': {
                  backgroundColor: 'rgba(125, 206, 160, 0.2)',
                  borderRadius: 4,
                  marginBottom: 10,
                  display: 'inline-block',
                  color: '#1F7042',
                  fontWeight: 'normal',
                  padding: '8px 16px',
                  marginLeft: 10,
                  verticalAlign: 'top',
                  marginTop: 2,
                  fontSize: 12
              },
              '& > span.chip.iron': {
                  backgroundColor: '#141414',
                  color: 'white'
              },
              '& > span.chip.hit': {
                  backgroundColor: '#622570',
                  color: 'white'
              }
          },
          '& > div > h2': {
              fontSize: 16,
              margin: '0 0 30px',
              fontWeight: 'normal'
          },
          '& > div > div > div > h3': {
            margin: '0 0 10px 0',
            fontWeight: 'bold',
            fontSize: 18,
            lineHeight: '20px',
            [theme.breakpoints.down('md')]: {
                fontSize: 16,
            }
          },
          '& > div > div > div > h4': {
            margin: '0 0 30px 0',
            fontWeight: 'normal',
            fontSize: 16,
            lineHeight: '20px',
            color: '#D0D0D0',
            [theme.breakpoints.down('md')]: {
                fontSize: 14,
            }
          }
      },
      cardIron: {
          background: 'linear-gradient(180deg, #373737 -116.52%, #818181 163.84%)',
          color: 'white',
          '& > div > h2': {
              color: 'white'
          }
      },
      button: {
        background: '#27AE60',
        borderRadius: 4,
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: '20px',
        width: 240,
        boxSizing: 'border-box',
        color: 'white',
        textDecoration: 'none',
        display: 'inline-block',
        textAlign: 'center',
        padding: '16px 18px',
        '&:hover': {
            background: '#52BE80'
        },
        [theme.breakpoints.down('md')]: {
            padding: '12px 14px',
        },
        [theme.breakpoints.down('sm')]: {
            width: 'auto'
        },
      },
      buttonSecond: {
        background: 'none',
        marginLeft: 10,
        '&:hover': {
            borderColor: '#ecf1f7',
            backgroundColor: '#ecf1f7',
            color: '#27AE60'
        }
      },
      iron: {
          '&:hover': {
            color: 'white',
            borderColor: 'transparent',
            backgroundColor: 'rgba(255,255,255,.16)'
          }
      },
      btnGreen: {
          color: '#27AE60',
          '&:hover': {
              color: '#52BE80'
          }
      },
      showAllBtn: {
        border: '1px solid #E8E8E8',
        boxSizing: 'border-box',
        borderRadius: 4,
        color: '#27AE60',
        padding: '15px 30px',
        cursor: 'pointer',
        fontSize: 14,
        '&:hover': {
            backgroundColor: '#27AE60',
            color: 'white'
        },
        '&:focus': {
            outline: 'none'
        }
      },
      cardsSecond: {
          backgroundColor: 'white',
          borderRadius: 8,
          marginBottom: 25,
          padding: '32px 64px',
          width: '31%',
          '& > div': {
              '& > img': {
                  display: 'block',
                  width: '100%',
                  marginBottom: 20,
                  [theme.breakpoints.down('xs')]: {
                      width: 'auto',
                  },
              },
              '& > h2': {
                  margin: 0,
                  fontSize: 16,
                  color: '#5B5B5B',
                  fontWeight: 'normal'
              }
          },
          '&:hover': {
              backgroundColor: '#FAFAFA'
          },
          [theme.breakpoints.down('sm')]: {
              padding: '16px 32px'
          },
      },
      h1: {
        fontSize: 18,
        color: 'black',
        margin: '0 0 15px',
        '& > a': {
            color: 'inherit',
            textDecoration: 'none'
        }
    },
    span: {
        backgroundColor: '#141414',
        borderRadius: 4,
        padding: '6px 12px',
        color: 'white',
        display: 'inline-block',
        marginLeft: 10,
        fontSize: 12,
        [theme.breakpoints.down('md')]: {
            marginLeft: 0,
            marginBottom: 10
        },
    },
    block: {
        opacity: 0,
        maxHeight: 0,
        transition: 'opacity .2s ease-out, max-height .3s ease-out .1s',
        zIndex: 1,
        position: 'relative'
    },
    smoothShow: {
        maxHeight: '1000px',
        opacity: 1,
        zIndex: 1,
        transition: 'opacity 1s ease-out'
    }
  })
);

const Cards = (props: any) => {
  const classes = useStyles({});
  const [show, setShow] = React.useState(false)

  const showAll = () => {
      setShow(!show)
  }

  const eventGAOrderCard = (num: number, isDetail?: boolean) => {
      if(num === 0) {
          ReactGA.event({
              category: "BccCards",
              action: "BccCards_IronOrder"
          });
          if(isDetail) {
            ReactGA.event({
                category: "BccCards",
                action: "BccCards_IronDetail"
            });
          }
      } else if(num === 1) {
        ReactGA.event({
            category: "BccCards",
            action: "BccCards_CardOrder"
        });
        if(isDetail) {
          ReactGA.event({
              category: "BccCards",
              action: "BccCards_CardDetail"
          });
        }
      } else if(num === 2) {
        ReactGA.event({
            category: "BccCards",
            action: "BccCards_UCardOrder"
        });
        if(isDetail) {
          ReactGA.event({
              category: "BccCards",
              action: "BccCards_UCardDetail"
          });
        }
      }
  };

  return (
    <Grid
        container
        direction="column"
        className={classes.main}
    >
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.title}>Карты</Grid>
        <Grid item xl={12} lg={12} md={12}>
            <Grid container direction="row" justify="space-between" className={`${classes.card} ${classes.cardIron}`}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                    <img src="ironcard.svg" alt=""/>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                    <h1>#IronCard<span className="chip iron">Премиум</span></h1>
                    <h2>Первая металлическая бесконтактная карта в Казахстане</h2>
                    <Grid container direction="row" justify="space-between">
                        <Grid item>
                            <h3>15 грамм</h3>
                            <h4>Нержавеющая сталь</h4>
                        </Grid>
                        <Grid item>
                            <h3>4%</h3>
                            <h4>Кешбэк на все операции</h4>
                        </Grid>
                        <Grid item>
                            <h3>1 000+ бизнес-залов</h3>
                            <h4>Бесплатное посещение по всему миру</h4>
                        </Grid>
                    </Grid>
                    <a href="https://www.bcc.kz/ironcard#order" onClick={() => eventGAOrderCard(0)} className={classes.button} target="_blank">Заказать карту</a>
                    <a href="https://www.bcc.kz/ironcard" onClick={() => eventGAOrderCard(0, true)} className={`${classes.button} ${classes.buttonSecond} ${classes.iron}`} target="_blank">Подробнее о карте</a>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xl={12} lg={12} md={12}>
            <Grid container direction="row" justify="space-between" className={classes.card}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                    <img src="cardcard.svg" alt=""/>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                    <h1>#картакарта<span className="chip hit">хит продаж</span><span className="chip">карта рассрочки</span><span className="chip">кредитная карта</span><span className="chip">дебетовая карта</span></h1>
                    <h2>Бери для всего, что ты хочешь</h2>
                    <Grid container direction="row" justify="space-between">
                        <Grid item>
                            <h3>15 грамм</h3>
                            <h4>Нержавеющая сталь</h4>
                        </Grid>
                        <Grid item>
                            <h3>2%</h3>
                            <h4>Кешбэк на все операции</h4>
                        </Grid>
                        <Grid item>
                            <h3>1 000+ бизнес-залов</h3>
                            <h4>Бесплатное посещение по всему миру</h4>
                        </Grid>
                    </Grid>
                    <a href="https://www.bcc.kz/ironcard#order" onClick={() => eventGAOrderCard(1)} className={classes.button} target="_blank">Заказать карту</a>
                    <a href="https://www.bcc.kz/ironcard" onClick={() => eventGAOrderCard(1, true)} className={`${classes.button} ${classes.buttonSecond} ${classes.btnGreen}`} target="_blank">Подробнее о карте</a>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xl={12} lg={12} md={12}>
            <Grid container direction="row" justify="space-between" className={classes.card} style={{marginBottom: 24}}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                    <img src="salarycard.svg" alt=""/>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                    <h1>Зарплатная #UCard<span className="chip">дебетовая карта</span></h1>
                    <h2>Идеальная карта, как для людей, так и бизнеса</h2>
                    <Grid container direction="row" justify="space-between">
                        <Grid item>
                            <h3>15 грамм</h3>
                            <h4>Нержавеющая сталь</h4>
                        </Grid>
                        <Grid item>
                            <h3>2%</h3>
                            <h4>Кешбэк на все операции</h4>
                        </Grid>
                        <Grid item>
                            <h3>1 000+ бизнес-залов</h3>
                            <h4>Бесплатное посещение по всему миру</h4>
                        </Grid>
                    </Grid>
                    <a href="https://www.bcc.kz/product/salary-project/" onClick={() => eventGAOrderCard(2)} className={classes.button} target="_blank">Заказать карту</a>
                    <a href="https://www.bcc.kz/product/salary-project/" onClick={() => eventGAOrderCard(2, true)} className={`${classes.button} ${classes.buttonSecond} ${classes.btnGreen}`} target="_blank">Подробнее о карте</a>
                </Grid>
            </Grid>
        </Grid>
        <Grid item container justify="space-between" className={`${classes.block} ${show ? classes.smoothShow : ''}`}>
            <Grid item className={classes.cardsSecond} xl={true} lg={true} md={true} sm={true} xs={12}>
                <div>
                    <img src="card1.svg" alt=""/>
                    <Grid container justify="space-between">
                        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}><h1 className={classes.h1}><a href="https://www.bcc.kz/product/standard-card/" target="_blank">Visa Infinite</a></h1></Grid>
                        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}><span className={classes.span}>Премиум</span></Grid>
                    </Grid>
                    <h2>Премиальная карта</h2>
                </div>
            </Grid>
            <Grid item className={classes.cardsSecond} xl={true} lg={true} md={true} sm={true} xs={12}>
                <div>
                    <img src="card2.svg" alt=""/>
                    <Grid container justify="space-between">
                        <Grid item><h1 className={classes.h1}><a href="https://www.bcc.kz/product/standard-card/" target="_blank">Visa Instant Social Card</a></h1></Grid>
                        <Grid item></Grid>
                    </Grid>
                    <h2>Для пенсии и пособий</h2>
                </div>
            </Grid>
            <Grid item className={classes.cardsSecond} xl={true} lg={true} md={true} sm={true} xs={12}>
                <div>
                    <img src="card3.svg" alt=""/>
                    <Grid container justify="space-between">
                        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}><h1 className={classes.h1}><a href="https://www.bcc.kz/product/standard-card/" target="_blank">Mastercard Black Edition</a></h1></Grid>
                        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}><span className={classes.span}>Премиум</span></Grid>
                    </Grid>
                    <h2>Экслюзивная карта</h2>
                </div>
            </Grid>
        </Grid>
        <Grid item xl={12} lg={12} md={12} style={{ marginBottom: 64, zIndex: 2 }}>
            <button className={classes.showAllBtn} onClick={() => showAll()}>{show ? 'Скрыть карты' : 'Показать все карты'} (3)</button>
        </Grid>
    </Grid>
  );
};

export default Cards;
