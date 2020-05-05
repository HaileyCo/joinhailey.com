import React from 'react';

import * as Spacer from './design_system/atoms/spacer';
import * as Section from './design_system/atoms/section';
import * as Text from './design_system/atoms/text';
import * as Layout from './design_system/atoms/layout';
import * as Brand from './design_system/atoms/brand';
import * as Button from './design_system/atoms/button';

const Hailey = () => (
  <Layout.Body>
    <Section.Hero>
      <Layout.Column>
        <Brand.Isotype />
      </Layout.Column>
      <Layout.Column>
        <Spacer.ExtraLarge />
        <Text.H1> hackers </Text.H1>
        <Spacer.Medium />
        <Text.Paragraph>
          hailey is a daring community of disruptors, innovators, hackers,
          lawyers and designers joined to explore and develop creative
          solutions to issues at the intersection of law and technology.
        </Text.Paragraph>
        <Spacer.Large />
        <Button.Primary>
          <Spacer.Small />
          <Text.Span> Apply for Membership </Text.Span>
          <Spacer.Small />
        </Button.Primary>
        <Spacer.ExtraLarge />
      </Layout.Column>
      <Layout.Column noWrap>
        <Spacer.Vertical.ExtraLarge />
        <Spacer.Vertical.ExtraLarge />
        <Spacer.Vertical.ExtraLarge />
      </Layout.Column>
    </Section.Hero>

    <Spacer.Medium />

    <Section.Medium>
      <Text.H2>
        Connecting tech talent
      </Text.H2>
      <Text.Paragraph>
        Hailey is a collaborative, interdisciplinary, international community.
      </Text.Paragraph>

      <Layout.Row>
        <Layout.Column>
          <Text.Paragraph>
            It is characterized by diversity of backgrounds, education,
            professions and age. You will join legal tech founders, software
            developers, engineers, lawyers, designers and illustrators, policy
            advocates, researchers, and a variety of users with passion for
          </Text.Paragraph>
        </Layout.Column>
        <Layout.Column>
          <Text.Paragraph>
            legal tech. Hailey leads the way within legal tech in embracing
            ideas with enthusiasm; in developing new products and services to
            be piloted and scaled, and in inspiring users to find solutions for
            tech innovation ensamord.
          </Text.Paragraph>
        </Layout.Column>
      </Layout.Row>
    </Section.Medium>

    <Spacer.Medium />
  </Layout.Body>
);

export default Hailey;
