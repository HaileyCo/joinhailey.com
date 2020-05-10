import React from 'react';

import * as Brand from './design_system/atoms/brand';
import * as Button from './design_system/atoms/button';
import * as Icon from './design_system/atoms/icon';
import * as Image from './design_system/atoms/image';
import * as Layout from './design_system/atoms/layout';
import * as Link from './design_system/atoms/link';
import * as List from './design_system/atoms/list';
import * as Section from './design_system/atoms/section';
import * as Spacer from './design_system/atoms/spacer';
import * as Text from './design_system/atoms/text';

import * as Assets from "../assets";

const Hailey = () => (
  <Layout.Body backgroundImage={Assets.Background}>
    <Section.Hero>
      <Brand.FloatingIsotype />
      <Layout.Column width="60%">
        <Spacer.Medium />
        <Spacer.Large />
        <Spacer.Large />
        <Spacer.Large />
        <Spacer.Large />
        <Text.H1> hackers </Text.H1>
        <Spacer.Medium />
        <Text.Paragraph>
          hailey is a daring community of disruptors, innovators, hackers,
          lawyers and designers joined to explore and develop creative
          solutions to issues at the intersection of law and technology.
        </Text.Paragraph>
        <Spacer.Large />
        <Layout.Row>
          <Link.Text href="https://joinhailey.typeform.com/to/DRzg4Z">
            <Button.Primary>
              <Spacer.Small />
              <Text.Span> Apply for Membership </Text.Span>
              <Spacer.Small />
            </Button.Primary>
          </Link.Text>
      </Layout.Row>
        <Spacer.Large />
        <Spacer.Large />
        <Spacer.Large />
      </Layout.Column>
    </Section.Hero>

    <Spacer.Medium />

    <Section.Medium backgroundOpacity={0.9}>
      <Layout.Column>
        <Spacer.ExtraLarge />
        <Text.H2>
          Supercoolest <br /> 3-word slogan
        </Text.H2>
        <Spacer.Medium />
        <Text.Paragraph>
          Hailey is a collaborative, interdisciplinary, international community.
        </Text.Paragraph>

        <Spacer.Medium />
        <Layout.Row>
          <Layout.Column width="45%">
            <Text.Paragraph>
              It is characterized by diversity of backgrounds, education,
              professions and age. You will join legal tech founders, software
              developers, engineers, lawyers, designers and illustrators,
              policy advocates, researchers, and a variety of users with
              passion for legal tech.
            </Text.Paragraph>
          </Layout.Column>
          <Spacer.Vertical.Small />
          <Layout.Column width="45%">
            <Text.Paragraph>
              Hailey leads the way within legal tech in embracing ideas with
              enthusiasm; in developing new products and services to be piloted
              and scaled, and in inspiring users to find solutions for tech
              innovation ensamord.
            </Text.Paragraph>
          </Layout.Column>
        </Layout.Row>
        <Spacer.ExtraLarge />
      </Layout.Column>
    </Section.Medium>

    <Spacer.Medium />

    <Section.Medium backgroundOpacity={0.95}>
      <Layout.Row>
        <Spacer.ExtraLarge />
        <Text.H2>
          Hailey App
        </Text.H2>
        <Spacer.Medium />
        <Text.Paragraph>
          Hailey allows you to connect with entrepreneurs, lawyers, legal tech
          professionals and designers.
        </Text.Paragraph>

        <Spacer.ExtraLarge />

        <Layout.Row>

          <Layout.Column width="40%">
            <Layout.Row>
              <Icon.Idea />
              <Spacer.Vertical.Medium />
              <Layout.Column width="70%">
                <Text.H4> Get Inspired </Text.H4>
                <Text.Paragraph>
                  Find inspiration, teammates, and <br />
                  job opportunities
                </Text.Paragraph>
              </Layout.Column>
            </Layout.Row>

            <Spacer.Medium />

            <Layout.Row>
              <Icon.Link />
              <Spacer.Vertical.Medium />
              <Layout.Column width="70%">
                <Text.H4> Connect </Text.H4>
                <Text.Paragraph>
                  Be a part of developing the <br />
                  future of the legal tech industry
                </Text.Paragraph>
              </Layout.Column>
            </Layout.Row>
            <Spacer.Medium />

            <Layout.Row>
              <Icon.Learn />
              <Spacer.Vertical.Medium />
              <Layout.Column width="70%">
                <Text.H4> Learn </Text.H4>
                <Text.Paragraph>
                  Find your next mentor and level up <br />
                  your Law, Design, and Tech knowledge
                </Text.Paragraph>
              </Layout.Column>
            </Layout.Row>
          </Layout.Column>

        </Layout.Row>

        <Spacer.ExtraLarge />
      </Layout.Row>
    </Section.Medium>

    <Spacer.Medium />

    <Section.Medium backgroundOpacity={0.95}>
      <Layout.Column>
        <Spacer.ExtraLarge />
        <Text.H2>
          Meet Your <br />
          Community
        </Text.H2>
        <Spacer.Medium />
        <Text.Paragraph>
          Your next cofounders and mentors are already here. Check out what
          they have to say:
        </Text.Paragraph>

        <Spacer.Medium />

        <Layout.Row justifySpaceEvenly>

          <Layout.Column alignCenter width="30%">
            <Icon.Quote />
            <Text.Paragraph center>
              Hailey is a fantastic initiative, taking the very next step in the
              Legal Tech industry. Hailey's app is interactive, well designed and
              has a unique interface. Tech innovation, support, diversity and
              inclusivity are key components of Hailey. Let the disruption begin!
              <br />
              <br />
              Riyanka Roy Choudhury, <br />
              Fellow at CodeX, The Stanford Center of Legal Informatics, Stanford
              Law School.
            </Text.Paragraph>
          </Layout.Column>

          <Spacer.Vertical.Medium />

          <Layout.Column alignCenter width="30%">
            <Icon.Quote />
            <Text.Paragraph center>
              Linn and  Malin, the Hailey founders, are great at not only seeing
              the future of legal, but bringing the community together at the
              grassroots to actually make it happen.
              <br/>
              <br/>
              Nicholas Hawtin,
              CEO, Think Legaltech, thinklegaltech.com
            </Text.Paragraph>
          </Layout.Column>

          <Spacer.Vertical.Medium />

          <Layout.Column alignCenter width="30%">
            <Icon.Quote />
            <Text.Paragraph center>
              The Hailey founders have a deep understanding for the crusially
              important intersection between tech and legal. They have an energy
              and drive that can move mountains and extensive networks in the
              field, laying a strong base for this community.
              <br/>
              <br/>
              Lise Alm, Head of Business Development at the Arbitration Institute at the
              Stockholm Chamber of Commerce
            </Text.Paragraph>
          </Layout.Column>

        </Layout.Row>

        <Spacer.ExtraLarge />

      </Layout.Column>
    </Section.Medium>

    <Spacer.Medium />

    <Section.Medium backgroundOpacity={0.90}>
      <Layout.Column>
        <Spacer.ExtraLarge />
        <Text.H2>
          Hailey Team
        </Text.H2>
        <Spacer.Medium />
        <Text.Paragraph>
          Hailey was founded by a Stockhol-based team with the purpose of
          joining the tech community with the legal community, creating an
          interdisciplinary, innovative disruptive community.
        </Text.Paragraph>

        <Spacer.Large />
        <Spacer.Large />

        <Layout.Row justifySpaceEvenly>
          <Layout.Column alignCenter width="30%">
            <Image.Medium rounded src={Assets.Linn} />
            <Spacer.Medium />
            <Text.H4 center> Linn Alfredsson </Text.H4>
            <Text.H5 center> Cofounder / Business Lead</Text.H5>
            <Spacer.Small />
            <Layout.Row>
              <Icon.LinkedIn />
              <Spacer.Vertical.Small />
              <Icon.Twitter />
            </Layout.Row>
          </Layout.Column>

          <Layout.Column alignCenter width="30%">
            <Image.Medium rounded src={Assets.Malin} />
            <Spacer.Medium />
            <Text.H4 center> Malin Männikkö </Text.H4>
            <Text.H5 center> Cofounder / Business Lead</Text.H5>
            <Spacer.Small />
            <Layout.Row>
              <Icon.LinkedIn />
              <Spacer.Vertical.Small />
              <Icon.Twitter />
            </Layout.Row>
          </Layout.Column>

          <Layout.Column alignCenter width="30%">
            <Image.Medium rounded src={Assets.Silvia} />
            <Spacer.Medium />
            <Text.H4 center> Silvia Carreta </Text.H4>
            <Text.H5 center> Cofounder / Business Lead</Text.H5>
            <Spacer.Small />
            <Layout.Row>
              <Icon.LinkedIn />
            </Layout.Row>
          </Layout.Column>
        </Layout.Row>

        <Spacer.Large />

        <Layout.Row justifySpaceEvenly>
          <Layout.Column alignCenter width="30%">
            <Image.Medium rounded src={Assets.Leandro} />
            <Spacer.ExtraSmall />
            <Text.H4 center> Leandro Ostera </Text.H4>
            <Text.H5 center> Cofounder / Business Lead</Text.H5>
            <Spacer.Small />
            <Layout.Row>
              <Icon.LinkedIn />
              <Spacer.Vertical.Small />
              <Icon.Twitter />
            </Layout.Row>
          </Layout.Column>

          <Layout.Column alignCenter width="30%">
            <Image.Medium rounded src={Assets.Maria} />
            <Spacer.ExtraSmall />
            <Text.H4 center> Maria Möller </Text.H4>
            <Text.H5 center> Cofounder / Business Lead</Text.H5>
            <Spacer.Small />
            <Layout.Row>
              <Icon.LinkedIn />
              <Spacer.Vertical.Small />
              <Icon.Twitter />
            </Layout.Row>
          </Layout.Column>
        </Layout.Row>

        <Layout.Row justifyCenter>
          <Spacer.ExtraLarge />
          <Text.Paragraph center>
            Don't hesitate to contact us if you have any questions!
          </Text.Paragraph>
          <Spacer.Large />
          <Link.Text href="mailto: hello@joinhailey.com">
            <Button.Primary>
              <Spacer.Small />
              <Text.Span> Contact Us! </Text.Span>
              <Spacer.Small />
            </Button.Primary>
          </Link.Text>
          <Spacer.ExtraLarge />
          <Spacer.ExtraLarge />
        </Layout.Row>

      </Layout.Column>
    </Section.Medium>

    <Spacer.Medium />

    <Section.Medium backgroundOpacity={0.90}>
      <Layout.Column>
        <Spacer.ExtraLarge />
        <Layout.Row justifyCenter>
          <Text.H4 center>
            Join!
          </Text.H4>
        </Layout.Row>

        <Spacer.Medium />

        <Layout.Row justifyCenter>
        <Text.Paragraph>
          Sign up for Hailey and find your next legal tech partner in crime!
        </Text.Paragraph>
        </Layout.Row>

        <Spacer.Large />

        <Layout.Row justifyCenter>
          <Link.Text href="https://joinhailey.typeform.com/to/DRzg4Z">
            <Button.Primary>
              <Spacer.Small />
              <Text.Span> Apply for Membership </Text.Span>
              <Spacer.Small />
            </Button.Primary>
          </Link.Text>
        </Layout.Row>
        <Spacer.ExtraLarge />

      </Layout.Column>
    </Section.Medium>

    <Spacer.Medium />

    <Section.Medium backgroundOpacity={0.95}>
      <Layout.Column>
        <Spacer.Large />
        <Layout.Row justifyCenter>
          <Brand.Isotype />
        </Layout.Row>

        <Spacer.Medium />

        <Layout.Row justifyCenter>
          <Text.Paragraph center>
            <Link.Text href="mailto: partners@joinhailey.com">
              Become a Partner
            </Link.Text>
          </Text.Paragraph>
        </Layout.Row>

        <Spacer.Large />

        <Layout.Row justifyCenter>
          <Text.Paragraph center>
            <Link.Text href="/legal-notice.html">
              Legal Stuff
            </Link.Text>
          </Text.Paragraph>
          <Text.Paragraph center>
            <Link.Text href="/legal-notice.html#privacy-policy">
              Provicy Policy
            </Link.Text>
          </Text.Paragraph>
        </Layout.Row>
        <Spacer.ExtraLarge />

      </Layout.Column>
    </Section.Medium>

  </Layout.Body>
);

export default Hailey;
