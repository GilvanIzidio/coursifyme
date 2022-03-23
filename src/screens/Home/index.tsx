import React, { useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import TopBar from '../../components/molecules/TopBar';
import Typograph from '../../components/atoms/Typograph';
import theme, { typography } from '../../styles/theme';
import SelectPicker from '../../components/atoms/SelectPicker';
import PostList from '../../components/molecules/PostList';
import { Container, Content, ViewSelectOder, ViewFlatList, ViewTitle, View } from './styles';
import FooteerCredits from '../../components/organism/FooteerCredits';

const Home = (): JSX.Element => {
  const fakeData = [
    {
      id: 3455,
      uri: `https://blog.coursify.me/wp-content/uploads/2019/07/sell-on-social-networks-cover-coursfiyme.jpg`,
      title: `6 Ways to Sell on Social Networks and Boost Your Online Business`,
      resume: `Sales teams, marketers, beginner entrepreneurs, everyone who has an online business wants to know: how to sell on social networks? Important channels for building a relationship
      with the consumer, few people know how to work with social media to generate revenue for
      their business. What is social selling? There was a time when a`,
    },
    {
      id: 5040,
      uri: `https://blog.coursify.me/wp-content/uploads/2019/07/vender-nas-redes-sociais-capa-coursfiyme.jpg`,
      title: `How to Pre-Launch Online Courses`,
      resume: `Pre-launch online courses is indicated to ensure the sales success that the course will have when it is officially launched. This is a pre-sale to a selected audience, which will be responsible for helping you attract an even larger audience. Why pre-launch online courses? Pre-launching online courses is a strategy you can incorporate into your`,
    },
    {
      id: 3446,
      uri: `https://blog.coursify.me/wp-content/uploads/2022/03/pre-launch-online-courses-coursfiyme-cover.jpg`,
      title: `6 maneiras de vender nas redes sociais e impulsionar seu negócio online`,
      resume: `Equipes de vendas, profissionais de marketing, empreendedores iniciantes, todo mundo que tem um negócio online quer saber: como vender nas redes sociais? Canais indispensáveis para criar um relacionamento com o consumidor, poucas pessoas sabem como trabalhar as mídias sociais para que elas gerem receita para o seu negócio. O que é venda social? Foi-se`,
    },
  ];

  const [pickerValue, setPickerValue] = useState('');
  return (
    <Container>
      <TopBar />
      <Content>
        <ScrollView>
          <View>
            <ViewSelectOder>
              <Typograph color={theme.colors.gray100} size={18}>
                ORDENAR POR:
              </Typograph>
              <SelectPicker
                items={[
                  { label: 'A-Z', key: 1, value: 'asc' },
                  { label: 'Z-A', key: 2, value: 'desc' },
                  { label: 'Mais visualizados', key: 3, value: 'asc1' },
                  { label: 'Menos visualizados', key: 4, value: 'desc1' },
                ]}
                optionsProperties={{ key: 'key', name: 'label', value: 'value' }}
                value={pickerValue || ''}
                onChange={setPickerValue}
              />
            </ViewSelectOder>
            <ViewFlatList>
              <ViewTitle>
                <Typograph>CURSSOS ONLINE</Typograph>
                <TouchableOpacity activeOpacity={0.8}>
                  <Typograph
                    size={17}
                    family={typography.RobotoRegular}
                    color={theme.colors.gray500}
                  >
                    VER MAIS ►
                  </Typograph>
                </TouchableOpacity>
              </ViewTitle>
              <PostList data={fakeData} />
            </ViewFlatList>
            <ViewFlatList>
              <ViewTitle>
                <Typograph>MARKETING DIGITAL</Typograph>
                <TouchableOpacity activeOpacity={0.8}>
                  <Typograph
                    size={17}
                    family={typography.RobotoRegular}
                    color={theme.colors.gray500}
                  >
                    VER MAIS ►
                  </Typograph>
                </TouchableOpacity>
              </ViewTitle>
              <PostList data={fakeData} />
            </ViewFlatList>
            <ViewFlatList>
              <ViewTitle>
                <Typograph>TUTORIAIS</Typograph>
                <TouchableOpacity activeOpacity={0.8}>
                  <Typograph
                    size={17}
                    family={typography.RobotoRegular}
                    color={theme.colors.gray500}
                  >
                    VER MAIS ►
                  </Typograph>
                </TouchableOpacity>
              </ViewTitle>
              <PostList data={fakeData} />
            </ViewFlatList>
          </View>
          <FooteerCredits />
        </ScrollView>
      </Content>
    </Container>
  );
};

export default Home;
