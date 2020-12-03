import Head from 'next/head'
import Link from 'next/link'
import "@ftdr/blueprint-core/assets/css/default-theme.css";
import { Text,Accordion,AccordionSection,Button,Separator,Checkbox,Input,RadioGroup,TextArea,Dialog} from "@ftdr/blueprint-components-react";
import React, { useState, useCallback } from 'react'
export default function Home() {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
        Read <Link href="/posts/first-post"><a>this page!</a></Link>
        </h1>

        <div id="shop-plans.Main" className="container py-12 md:p-6 lg:p-12 xl:p-16"><h1 className="text-3xl text-center text-ahs-blue font-bold px-4 md:p-0">SHOP OUR PLANS.</h1><div className="my-3 text-center text-sm md:text-base m-auto md:whitespace-pre">Find a plan that's right for you. We're super flexible.</div><div className="flex flex-col justify-center items-center"><div id="card-container" className="w-full lg:justify-center ShopPlansSection_cardContainer"><div id="panel-Homeowners plans" className="ShopPlansSection_planCard"><div id="panel-Homeowners plans-0" className="panel-border-color-gray-500 panel-background-color-white panel-shadow panel-border-round-top-right-sm panel-border-round-bottom-right-sm panel-border-round-bottom-left-sm panel-border-round-top-left-sm panel-padding-top-xl panel-padding-right-xl panel-padding-bottom-xl panel-padding-left-xl flex flex-col h-full "><div className="flex-1"><div className="flex justify-between items-center"><h4 className="text-heading-04 xl:text-3xl ShopPlansSection_planCardTitle ">Appliance</h4></div><div className="text-caption ShopPlansSection_planCardDescription ">Covers essential appliances you use every day.</div><div><svg viewBox="0 0 24 24" fill="currentcolor" className="text-primary &quot;md:fill-current inline-block text-ahs-blue" width="24" height="24"><g clip-path="url(#icon-check_svg__clip0)"><path d="M9.08 15.681l9.7-9.902a.6.6 0 01.848-.009l.572.56a.6.6 0 01.009.848L9.52 18.09a.6.6 0 01-.852.005l-4.96-4.947a.6.6 0 01-.001-.849l.565-.566a.6.6 0 01.848-.001l3.96 3.95z" fill="currentcolor"></path></g><defs><clipPath id="icon-check_svg__clip0"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></svg><div className="text-body-long ShopPlansSection_planCardCoverages ">Kitchen Appliances</div></div><div><svg viewBox="0 0 24 24" fill="currentcolor" className="text-primary &quot;md:fill-current inline-block text-ahs-blue" width="24" height="24"><g clip-path="url(#icon-check_svg__clip0)"><path d="M9.08 15.681l9.7-9.902a.6.6 0 01.848-.009l.572.56a.6.6 0 01.009.848L9.52 18.09a.6.6 0 01-.852.005l-4.96-4.947a.6.6 0 01-.001-.849l.565-.566a.6.6 0 01.848-.001l3.96 3.95z" fill="currentcolor"></path></g><defs><clipPath id="icon-check_svg__clip0"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></svg><div className="text-body-long ShopPlansSection_planCardCoverages ">Laundry Appliances</div></div></div><div className="flex justify-self-end w-full md:flex-none md:w-auto"><a href="https://shopping.ahs.com/plans" className="button button-medium button-filled button-filled-primary bg-ahs-med-blue ShopPlansSection_bgBrandColor ShopPlansSection_planCardSubmitButton" id="choosePlanApplianceButton"><span className="button-label button-label-align-center"><span className="button-label-text button-medium-label-text">Shop Plans</span></span></a></div></div></div><div id="panel-Homeowners plans" className="ShopPlansSection_planCard"><div id="panel-Homeowners plans-1" className="panel-border-color-gray-500 panel-background-color-white panel-shadow panel-border-round-top-right-sm panel-border-round-bottom-right-sm panel-border-round-bottom-left-sm panel-border-round-top-left-sm panel-padding-top-xl panel-padding-right-xl panel-padding-bottom-xl panel-padding-left-xl flex flex-col h-full "><div className="flex-1"><div className="flex justify-between items-center"><h4 className="text-heading-04 xl:text-3xl ShopPlansSection_planCardTitle ">Systems</h4></div><div className="text-caption ShopPlansSection_planCardDescription ">Helps protect major systems that keep your home running.</div><div><svg viewBox="0 0 24 24" fill="currentcolor" className="text-primary &quot;md:fill-current inline-block text-ahs-blue" width="24" height="24"><g clip-path="url(#icon-check_svg__clip0)"><path d="M9.08 15.681l9.7-9.902a.6.6 0 01.848-.009l.572.56a.6.6 0 01.009.848L9.52 18.09a.6.6 0 01-.852.005l-4.96-4.947a.6.6 0 01-.001-.849l.565-.566a.6.6 0 01.848-.001l3.96 3.95z" fill="currentcolor"></path></g><defs><clipPath id="icon-check_svg__clip0"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></svg><div className="text-body-long ShopPlansSection_planCardCoverages ">Heating and Cooling Systems</div></div><div><svg viewBox="0 0 24 24" fill="currentcolor" className="text-primary &quot;md:fill-current inline-block text-ahs-blue" width="24" height="24"><g clip-path="url(#icon-check_svg__clip0)"><path d="M9.08 15.681l9.7-9.902a.6.6 0 01.848-.009l.572.56a.6.6 0 01.009.848L9.52 18.09a.6.6 0 01-.852.005l-4.96-4.947a.6.6 0 01-.001-.849l.565-.566a.6.6 0 01.848-.001l3.96 3.95z" fill="currentcolor"></path></g><defs><clipPath id="icon-check_svg__clip0"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></svg><div className="text-body-long ShopPlansSection_planCardCoverages ">Electrical Systems</div></div><div><svg viewBox="0 0 24 24" fill="currentcolor" className="text-primary &quot;md:fill-current inline-block text-ahs-blue" width="24" height="24"><g clip-path="url(#icon-check_svg__clip0)"><path d="M9.08 15.681l9.7-9.902a.6.6 0 01.848-.009l.572.56a.6.6 0 01.009.848L9.52 18.09a.6.6 0 01-.852.005l-4.96-4.947a.6.6 0 01-.001-.849l.565-.566a.6.6 0 01.848-.001l3.96 3.95z" fill="currentcolor"></path></g><defs><clipPath id="icon-check_svg__clip0"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></svg><div className="text-body-long ShopPlansSection_planCardCoverages ">Plumbing Systems</div></div></div><div className="flex justify-self-end w-full md:flex-none md:w-auto"><a href="https://shopping.ahs.com/plans" className="button button-medium button-filled button-filled-primary bg-ahs-med-blue ShopPlansSection_bgBrandColor ShopPlansSection_planCardSubmitButton" id="choosePlanSystemsButton"><span className="button-label button-label-align-center"><span className="button-label-text button-medium-label-text">Shop Plans</span></span></a></div></div></div><div id="panel-Homeowners plans" className="ShopPlansSection_planCard"><div id="panel-Homeowners plans-2" className="panel-border-color-gray-500 panel-background-color-white panel-shadow panel-border-round-top-right-sm panel-border-round-bottom-right-sm panel-border-round-bottom-left-sm panel-border-round-top-left-sm panel-padding-top-xl panel-padding-right-xl panel-padding-bottom-xl panel-padding-left-xl flex flex-col h-full ShopPlansSection_planCardFocused"><div className="flex-1"><div className="flex justify-between items-center"><h4 className="text-heading-04 xl:text-3xl ShopPlansSection_planCardTitle ShopPlansSection_planCardTitleFocused">Combo</h4><span className="badge badge-primary badge-large ShopPlansSection_planCardBadge" title="Most Popular">Most Popular</span></div><div className="text-caption ShopPlansSection_planCardDescription ShopPlansSection_planCardDescriptionFocused">Combines appliances and systems for the most coverage at the best price.</div><div><svg viewBox="0 0 24 24" fill="currentcolor" className="text-white &quot;md:fill-current inline-block ShopPlansSection_planCardCoveragesFocused" width="24" height="24"><g clip-path="url(#icon-check_svg__clip0)"><path d="M9.08 15.681l9.7-9.902a.6.6 0 01.848-.009l.572.56a.6.6 0 01.009.848L9.52 18.09a.6.6 0 01-.852.005l-4.96-4.947a.6.6 0 01-.001-.849l.565-.566a.6.6 0 01.848-.001l3.96 3.95z" fill="currentcolor"></path></g><defs><clipPath id="icon-check_svg__clip0"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></svg><div className="text-body-long ShopPlansSection_planCardCoverages ShopPlansSection_planCardCoveragesFocused">Heating and Cooling Systems</div></div><div><svg viewBox="0 0 24 24" fill="currentcolor" className="text-white &quot;md:fill-current inline-block ShopPlansSection_planCardCoveragesFocused" width="24" height="24"><g clip-path="url(#icon-check_svg__clip0)"><path d="M9.08 15.681l9.7-9.902a.6.6 0 01.848-.009l.572.56a.6.6 0 01.009.848L9.52 18.09a.6.6 0 01-.852.005l-4.96-4.947a.6.6 0 01-.001-.849l.565-.566a.6.6 0 01.848-.001l3.96 3.95z" fill="currentcolor"></path></g><defs><clipPath id="icon-check_svg__clip0"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></svg><div className="text-body-long ShopPlansSection_planCardCoverages ShopPlansSection_planCardCoveragesFocused">Electrical Systems</div></div><div><svg viewBox="0 0 24 24" fill="currentcolor" className="text-white &quot;md:fill-current inline-block ShopPlansSection_planCardCoveragesFocused" width="24" height="24"><g clip-path="url(#icon-check_svg__clip0)"><path d="M9.08 15.681l9.7-9.902a.6.6 0 01.848-.009l.572.56a.6.6 0 01.009.848L9.52 18.09a.6.6 0 01-.852.005l-4.96-4.947a.6.6 0 01-.001-.849l.565-.566a.6.6 0 01.848-.001l3.96 3.95z" fill="currentcolor"></path></g><defs><clipPath id="icon-check_svg__clip0"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></svg><div className="text-body-long ShopPlansSection_planCardCoverages ShopPlansSection_planCardCoveragesFocused">Plumbing Systems</div></div><div><svg viewBox="0 0 24 24" fill="currentcolor" className="text-white &quot;md:fill-current inline-block ShopPlansSection_planCardCoveragesFocused" width="24" height="24"><g clip-path="url(#icon-check_svg__clip0)"><path d="M9.08 15.681l9.7-9.902a.6.6 0 01.848-.009l.572.56a.6.6 0 01.009.848L9.52 18.09a.6.6 0 01-.852.005l-4.96-4.947a.6.6 0 01-.001-.849l.565-.566a.6.6 0 01.848-.001l3.96 3.95z" fill="currentcolor"></path></g><defs><clipPath id="icon-check_svg__clip0"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></svg><div className="text-body-long ShopPlansSection_planCardCoverages ShopPlansSection_planCardCoveragesFocused">Kitchen Appliances</div></div><div><svg viewBox="0 0 24 24" fill="currentcolor" className="text-white &quot;md:fill-current inline-block ShopPlansSection_planCardCoveragesFocused" width="24" height="24"><g clip-path="url(#icon-check_svg__clip0)"><path d="M9.08 15.681l9.7-9.902a.6.6 0 01.848-.009l.572.56a.6.6 0 01.009.848L9.52 18.09a.6.6 0 01-.852.005l-4.96-4.947a.6.6 0 01-.001-.849l.565-.566a.6.6 0 01.848-.001l3.96 3.95z" fill="currentcolor"></path></g><defs><clipPath id="icon-check_svg__clip0"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></svg><div className="text-body-long ShopPlansSection_planCardCoverages ShopPlansSection_planCardCoveragesFocused">Laundry Appliances</div></div></div><div className="flex justify-self-end w-full md:flex-none md:w-auto"><a href="https://shopping.ahs.com/plans" className="button button-medium button-filled button-filled-primary bg-ahs-med-blue false ShopPlansSection_planCardSubmitButton" id="choosePlanComboButton"><span className="button-label button-label-align-center"><span className="button-label-text button-medium-label-text">Shop Plans</span></span></a></div></div></div></div><div className="flex flex-col md:flex-row justify-center"><div className="text-body-long mr-1">Like all home warranties, our contracts have </div><button className="link link-underline-always text-1 ShopPlansSection_shopPlansLink" aria-disabled="false" tabIndex="0" onClick={() => setDialogOpen(true)}>limitations and exclusions.</button></div></div></div>
        <Dialog
      open={dialogOpen}
      modal={true}
      onClose={() => setDialogOpen(false)}
      header="Dialog Title"
      actions={[<Button size="small" label="OK" />, <Button variant="ghost" size="small" label="Cancel" />]}
    >
      <div>An important message.</div>
    </Dialog>
       
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }

        
.ShopPlansSection_bgBrandColor {
  background-color: #202a45
}

.ShopPlansSection_cardContainer {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  flex-grow: 0;
  -webkit-overflow-scrolling: touch;
  overflow-x: auto;
  -ms-scroll-snap-type: x mandatory;
  scroll-snap-type: x mandatory
}

.ShopPlansSection_planCard {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin-top: .75rem;
  margin-bottom: .75rem;
  scroll-snap-align: center
}

.ShopPlansSection_planCard>div {
  max-width: 17.5rem;
  min-height: 350px;
  box-shadow: 0 2px 14px 0 rgba(0,0,0,.1)
}

.ShopPlansSection_planCard:first-of-type {
  padding-left: 1rem
}

.ShopPlansSection_planCard:last-of-type {
  padding-right: 1rem
}

.ShopPlansSection_planCardTitle {
  color: #202a45;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 0;
  padding-bottom: 0
}

.ShopPlansSection_planCardBadge {
  --bg-opacity:1;background-color: rgba(255,255,255,var(--bg-opacity));
  margin-left: 1rem;
  font-weight: 700;
  color: #202a45;
  background-color: #fff;
  font-size: .875rem;
  border-radius: .5rem
}

.ShopPlansSection_planCardDescription {
  color: #555;
  padding-top: .75rem;
  padding-bottom: .75rem
}

.ShopPlansSection_planCardCoverages {
  color: #555;
  letter-spacing: -.02em;
  display: inline-block;
  font-weight: 700;
  padding-left: .5rem
}

.ShopPlansSection_planCardSubmitButton {
  border-radius: 9999px;
  width: 100%
}

.ShopPlansSection_planCardFocused {
  background-color: #202a45;
  color: #fff
}

.ShopPlansSection_planCardTitleFocused {
  --text-opacity:1;color: #fff;
  color: rgba(255,255,255,var(--text-opacity))
}

.ShopPlansSection_planCardCoveragesFocused,.ShopPlansSection_planCardDescriptionFocused,.ShopPlansSection_planCardPriceFocused {
  color: #fff
}
/*
.ShopPlansSection_tabbarContainer__3kBjI {
  background-color: #fff;
  border-radius: 9999px;
  display: flex
}

.ShopPlansSection_tabOptionLabel__2USgu {
  height: 3rem;
  text-align: center;
  padding-top: 1rem;
  color: #9e9e9e;
  cursor: pointer
}

.ShopPlansSection_tabOptionLabelSelected__1jjPw {
  color: #202a45
}

.ShopPlansSection_tabOption__2h3e3 {
  background-color: #d8d8d8;
  height: 2pt;
  border-radius: 9999px;
  cursor: pointer
}

.ShopPlansSection_tabOption__2h3e3:first-of-type {
  border-top-left-radius: 9999px;
  border-bottom-left-radius: 9999px
}

.ShopPlansSection_tabOption__2h3e3:nth-last-of-type(2) {
  border-top-right-radius: 9999px;
  border-bottom-right-radius: 9999px
}

.ShopPlansSection_tabSelection__1bgv9 {
  background-color: #202a45;
  border-radius: 9999px;
  position: absolute;
  height: 2pt;
  transition: all .5s ease-in-out
} */

@media (min-width: 1024px) {
  .ShopPlansSection_planCard {
      display:flex;
      flex-direction: column;
      flex-shrink: 0;
      margin-top: .75rem;
      margin-bottom: .75rem;
      width: 33.333333%
  }

  .ShopPlansSection_planCard>div {
      max-width: none;
      min-height: 350px;
      box-shadow: 0 2px 14px 0 rgba(0,0,0,.1)
  }
}

@media (min-width: 1280px) {
  .ShopPlansSection_planCard {
      display:flex;
      flex-direction: column;
      flex-shrink: 0;
      margin-top: .75rem;
      margin-bottom: .75rem;
      width: 28%
  }

  .ShopPlansSection_planCardDescription {
      font-size: 1.15rem;
      padding-top: .75rem;
      padding-bottom: .75rem;
      line-height: 1.25rem
  }
}

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
