import React from "react";

import * as Brand from "./design_system/atoms/brand";
import * as Button from "./design_system/atoms/button";
import * as Icon from "./design_system/atoms/icon";
import * as Image from "./design_system/atoms/image";
import * as Layout from "./design_system/atoms/layout";
import * as Link from "./design_system/atoms/link";
import * as List from "./design_system/atoms/list";
import * as Section from "./design_system/atoms/section";
import * as Spacer from "./design_system/atoms/spacer";
import * as Text from "./design_system/atoms/text";

import * as Assets from "../assets";

const Mobile = ({ screen }) => {
  const iphone_se = screen.width < 400;
  return (
    <Layout.Body backgroundImage={Assets.Background}>
      <Section.HeroMobile>
        <Layout.Column>
          <Spacer.Small />
          <Spacer.Medium />
          <Brand.Isotype />
          <Spacer.Large grow shrink />
          <Spacer.Medium />
          <Layout.Row justifyCenter>
            <Text.H1Small> innovators </Text.H1Small> <Spacer.Medium />
            <Text.Paragraph center>
              Hailey is a daring community of disruptors, innovators, hackers,
              lawyers and designers joined to explore and develop creative
              solutions to issues at the intersection of law and technology.{" "}
            </Text.Paragraph>{" "}
          </Layout.Row>{" "}
          <Spacer.Large grow />
          <Layout.Row justifySpaceEvenly>
            <Link.Text href="https://joinhailey.typeform.com/to/DRzg4Z">
              <Button.Primary>
                <Text.Span> Apply for Membership </Text.Span>{" "}
              </Button.Primary>{" "}
            </Link.Text>{" "}
          </Layout.Row>{" "}
          <Spacer.Large grow />
        </Layout.Column>{" "}
      </Section.HeroMobile>

      <Spacer.Medium />

      <Section.MediumMobile backgroundOpacity={0.9}>
        <Layout.Column>
          <Text.H2>
            Connecting <br /> tech talent{" "}
          </Text.H2>{" "}
          <Spacer.Medium />
          <Text.Paragraph>
            Hailey is a collaborative, interdisciplinary, international
            community.{" "}
          </Text.Paragraph>
          <Spacer.Medium />
          <Layout.Row>
            <Layout.Column>
              <Text.Paragraph>
                It is characterized by diversity of backgrounds, education,
                professions and age.You will join legal tech founders, software
                developers, engineers, lawyers, designers and illustrators,
                policy advocates, researchers, and a variety of users with
                passion for legal tech.{" "}
              </Text.Paragraph>{" "}
              <Spacer.Medium />
              <Text.Paragraph>
                Hailey leads the way within legal tech in embracing ideas with
                enthusiasm; in developing new products and services to be
                piloted and scaled, and in inspiring users to find solutions for
                tech innovation.{" "}
              </Text.Paragraph>{" "}
            </Layout.Column>{" "}
          </Layout.Row>{" "}
        </Layout.Column>{" "}
      </Section.MediumMobile>

      <Spacer.Medium />

      <Section.MediumMobile backgroundOpacity={0.95}>
        <Layout.Row>
          <Text.H2>Hailey App </Text.H2> <Spacer.Medium />
          <Text.Paragraph>
            Hailey allows you to connect with entrepreneurs, lawyers, <br />
            legal tech professionals and designers.{" "}
          </Text.Paragraph>
          <Spacer.Medium />
          <Layout.Row justifyCenter>
            <Layout.Crop maxWidth={"100%"}>
              <Image.Full src={Assets.Phone} maxWidth="100%" />
            </Layout.Crop>{" "}
          </Layout.Row>
          <Spacer.Medium />
          <Layout.Row justifyCenter>
            <Icon.Idea />{" "}
            {iphone_se ? <Spacer.Medium /> : <Spacer.Vertical.Medium />}{" "}
            <Layout.Column width="65%">
              <Text.H4 center={iphone_se}> Get Inspired </Text.H4>{" "}
              <Text.Paragraph center={iphone_se}>
                Find inspiration, teammates, and job opportunities{" "}
              </Text.Paragraph>{" "}
            </Layout.Column>{" "}
          </Layout.Row>
          <Spacer.Medium />
          <Layout.Row justifyCenter>
            <Icon.Link />{" "}
            {iphone_se ? <Spacer.Medium /> : <Spacer.Vertical.Medium />}{" "}
            <Layout.Column width="65%">
              <Text.H4 center={iphone_se}> Connect </Text.H4>{" "}
              <Text.Paragraph center={iphone_se}>
                Be a part of developing the future of the legal tech industry{" "}
              </Text.Paragraph>{" "}
            </Layout.Column>{" "}
          </Layout.Row>
          <Spacer.Medium />
          <Layout.Row justifyCenter>
            <Icon.Learn />{" "}
            {iphone_se ? <Spacer.Medium /> : <Spacer.Vertical.Medium />}{" "}
            <Layout.Column width="65%">
              <Text.H4 center={iphone_se}> Learn </Text.H4>{" "}
              <Text.Paragraph center={iphone_se}>
                Find your next mentor and level up your Law, Design, and Tech
                knowledge{" "}
              </Text.Paragraph>{" "}
            </Layout.Column>{" "}
          </Layout.Row>{" "}
        </Layout.Row>{" "}
      </Section.MediumMobile>

      <Spacer.Medium />

      <Section.MediumMobile backgroundOpacity={0.95}>
        <Layout.Column>
          <Text.H2>
            Meet Your <br />
            Community{" "}
          </Text.H2>{" "}
          <Spacer.Medium />
          <Text.Paragraph>
            Your next cofounders and mentors are already here.Check out what
            they have to say:
          </Text.Paragraph>
          <Spacer.Medium />
          <Layout.Row justifySpaceEvenly>
            <Layout.Column alignCenter>
              <Icon.Quote />
              <Text.Paragraph center italic>
                Hailey is a fantastic initiative, taking the very next step in
                the Legal Tech industry.Hailey 's app is interactive, well
                designed and has a unique interface.Tech innovation, support,
                diversity and inclusivity are key components of Hailey.Let the
                disruption begin!
              </Text.Paragraph>{" "}
              <Spacer.Medium />
              <Text.Paragraph center>
                Riyanka Roy Choudhury, <br />
                Fellow at CodeX, The Stanford Center of Legal Informatics,
                Stanford Law School.{" "}
              </Text.Paragraph>
              <Spacer.Medium />
              <Icon.Quote />
              <Text.Paragraph center italic>
                The Hailey founders, are great at not only
                seeing the future of legal, but bringing the community together
                at the grassroots to actually make it happen.{" "}
              </Text.Paragraph>{" "}
              <Spacer.Medium />
              <Text.Paragraph center>
                Nicholas Hawtin, CEO, Think Legaltech, thinklegaltech.com{" "}
              </Text.Paragraph>{" "}
              <Spacer.Medium />
              <Icon.Quote />
              <Text.Paragraph center italic>
                The Hailey founders have a deep understanding for the crusially
                important intersection between tech and legal.They have an
                energy and drive that can move mountains and extensive networks
                in the field, laying a strong base for this community.{" "}
              </Text.Paragraph>{" "}
              <Spacer.Medium />
              <Text.Paragraph center>
                Lise Alm, Head of Business Development at the Arbitration
                Institute at the Stockholm Chamber of Commerce{" "}
              </Text.Paragraph>{" "}
            </Layout.Column>
          </Layout.Row>{" "}
        </Layout.Column>{" "}
      </Section.MediumMobile>

      <Spacer.Medium />

      <Section.MediumMobile backgroundOpacity={0.9}>
        <Layout.Column>
          <Text.H2>Hailey Team </Text.H2> <Spacer.Medium />
          <Text.Paragraph>
            Hailey was founded by a Stockholm - based team with the purpose of
            joining the tech community with the legal community, creating an
            interdisciplinary, innovative disruptive community.{" "}
          </Text.Paragraph>
          <Spacer.Large />

          <Spacer.Large />
          <Image.Medium rounded src={Assets.Malin} /> <Spacer.Medium />
          <Text.H4 center> Malin Männikkö </Text.H4>{" "}
          <Text.H5 center> Cofounder / Product Lead </Text.H5>{" "}
          <Spacer.Small />
          <Layout.Row justifyCenter>
            <Link.Text href="https://www.linkedin.com/in/malinmannikko/">
              <Icon.LinkedIn />
            </Link.Text>{" "}
            <Spacer.Vertical.Medium />
            <Link.Text href="https://www.twitter.com/MalinMnnikk">
              <Icon.Twitter />
            </Link.Text>{" "}
          </Layout.Row>{" "}
          <Spacer.Large />
          <Image.Medium rounded src={Assets.Silvia} /> <Spacer.Medium />
          <Text.H4 center> Silvia Carretta </Text.H4>{" "}
          <Text.H5 center> Growth Lead </Text.H5> <Spacer.Small />
          <Layout.Row justifyCenter>
            <Link.Text href="https://www.linkedin.com/in/silviacarretta">
              <Icon.LinkedIn />
            </Link.Text>{" "}
          </Layout.Row>{" "}
          <Spacer.Large />
          <Image.Medium rounded src={Assets.Leandro} />{" "}
          <Spacer.ExtraSmall />
          <Text.H4 center> Leandro Ostera </Text.H4>{" "}
          <Text.H5 center> Tech Lead </Text.H5> <Spacer.Small />
          <Layout.Row justifyCenter>
            <Link.Text href="https://www.linkedin.com/in/ostera/">
              <Icon.LinkedIn />
            </Link.Text>{" "}
            <Spacer.Vertical.Medium />
            <Link.Text href="https://www.twitter.com/leostera">
              <Icon.Twitter />
            </Link.Text>{" "}
          </Layout.Row>{" "}
          <Spacer.Large />
          <Image.Medium rounded src={Assets.Maria} /> <Spacer.ExtraSmall />
          <Text.H4 center> Maria Möller </Text.H4>{" "}
          <Text.H5 center> Design Lead </Text.H5> <Spacer.Small />
          <Layout.Row justifyCenter>
            <Link.Text href="https://www.linkedin.com/in/mariamöller/">
              <Icon.LinkedIn />
            </Link.Text>{" "}
          </Layout.Row>{" "}
        </Layout.Column>{" "}
          </Layout.Row>
      <Layout.Row justifyCenter>
        <Spacer.ExtraLarge />
        <Text.Paragraph center>
          Don 't hesitate to contact us if you have any questions!{" "}
        </Text.Paragraph>{" "}
        <Spacer.Large />
        <Link.Text href="mailto: hello@joinhailey.com">
          <Button.Primary>
            <Text.Span> Contact Us! </Text.Span>{" "}
          </Button.Primary>{" "}
        </Link.Text>{" "}
      </Layout.Row>
        </Layout.Column>{ " " }
      </Section.MediumMobile >

      <Spacer.Medium />

      <Section.MediumMobile backgroundOpacity={0.9}>
        <Layout.Column>
          <Layout.Row justifyCenter>
            <Text.H4 center>Join!</Text.H4>{" "}
          </Layout.Row>
          <Spacer.Medium />
          <Layout.Row justifyCenter>
            <Text.Paragraph center>
          Sign up for Hailey and find your next legal tech partner in crime!
            </Text.Paragraph>{" "}
          </Layout.Row>
          <Spacer.Large />
          <Layout.Row justifyCenter>
            <Link.Text href="https://joinhailey.typeform.com/to/DRzg4Z">
              <Button.Primary>
                <Text.Span> Apply for Membership </Text.Span>{" "}
              </Button.Primary>{" "}
            </Link.Text>{" "}
          </Layout.Row>{" "}
        </Layout.Column>{" "}
      </Section.MediumMobile>

      <Spacer.Medium />

      <Section.FooterMobile backgroundOpacity={0.95}>
        <Layout.Column>
          <Layout.Row justifyCenter>
            <Brand.Isotype />
          </Layout.Row>

          <Spacer.Medium />

          <Layout.Row justifyCenter>
            <Text.Paragraph center>
              <Link.Text href="mailto: partners@joinhailey.com">
            Become a Partner{" "}
              </Link.Text>{" "}
            </Text.Paragraph>{" "}
          </Layout.Row>

          <Spacer.Medium />

          <Layout.Row justifyCenter>
            <Text.Paragraph center>
              <Link.Text href="/legal-notice.html">Legal Stuff </Link.Text>{" "}
            </Text.Paragraph>{" "}
            <Text.Paragraph center>
              <Link.Text href="/legal-notice.html#privacy-policy">
            Privacy Policy{" "}
              </Link.Text>{" "}
            </Text.Paragraph>{" "}
          </Layout.Row>

          <Spacer.Medium />

          <Layout.Row justifyCenter>
            <Text.Paragraph center opacity={0.7}>
          & copy; Hailey 2020{" "}
            </Text.Paragraph>{" "}
          </Layout.Row>
        </Layout.Column>{" "}
      </Section.FooterMobile>
    </Layout.Body >
  );
};

export default Mobile;
