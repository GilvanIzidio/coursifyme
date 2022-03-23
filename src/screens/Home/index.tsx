import React, { useState, useEffect, useCallback } from 'react';
import { Alert, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import TopBar from '../../components/molecules/TopBar';
import Typograph from '../../components/atoms/Typograph';
import theme, { typography } from '../../styles/theme';
import SelectPicker from '../../components/atoms/SelectPicker';
import PostList from '../../components/molecules/PostList';
import FooteerCredits from '../../components/organism/FooteerCredits';
import { getPostByCategoryId } from '../../services/PostService';
import { Container, Content, ViewSelectOder, ViewFlatList, ViewTitle, View } from './styles';
import Post from '../../models/Post';
import PostItemSkeleton from '../../components/organism/PostItem/Skeleton';

const Home = (): JSX.Element => {
  const [pickerValue, setPickerValue] = useState('');
  const [onlineCourses, setOnlineCourses] = useState<Post[]>([] as Post[]);
  const [digitalMarketingCourses, setDigitalMarketingCourses] = useState<Post[]>([] as Post[]);
  const [tutorialsCourses, setTutorialsCourses] = useState<Post[]>([] as Post[]);

  const [loadingOnlineCourses, setLoadingOnlineCourses] = useState(false);
  const [loadingDigitalMarketingCourses, setLoadingDigitalMarketingCourses] = useState(false);
  const [loadingTutorialsCourses, setLoadingTutorialsCourses] = useState(false);

  const getAllOnlineCourse = useCallback(async () => {
    try {
      setLoadingOnlineCourses(true);
      const response = await getPostByCategoryId('82');
      setOnlineCourses(response);
    } catch (error: any) {
      Alert.alert(JSON.stringify(error));
    } finally {
      setLoadingOnlineCourses(false);
    }
  }, []);

  const getAllDigitalMarketingCourse = useCallback(async () => {
    try {
      setLoadingDigitalMarketingCourses(true);
      const response = await getPostByCategoryId('234');
      setDigitalMarketingCourses(response);
    } catch (error: any) {
      Alert.alert(JSON.stringify(error));
    } finally {
      setLoadingDigitalMarketingCourses(false);
    }
  }, []);

  const getAllTutorialsCourse = useCallback(async () => {
    try {
      setLoadingTutorialsCourses(true);
      const response = await getPostByCategoryId('1171');
      setTutorialsCourses(response);
    } catch (error: any) {
      Alert.alert(JSON.stringify(error));
    } finally {
      setLoadingTutorialsCourses(false);
    }
  }, []);

  useEffect(() => {
    getAllOnlineCourse();
    getAllDigitalMarketingCourse();
    getAllTutorialsCourse();
  }, [getAllOnlineCourse, getAllDigitalMarketingCourse, getAllTutorialsCourse]);

  return (
    <Container>
      <TopBar />
      <Content>
        <ScrollView>
          <View>
            <ViewSelectOder>
              <Typograph color={theme.colors.gray200} size={18}>
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
            <ViewTitle>
              <Typograph>CURSOS ONLINE</Typograph>
              <TouchableOpacity activeOpacity={0.8}>
                <Typograph size={17} family={typography.RobotoRegular} color={theme.colors.gray500}>
                  VER MAIS ►
                </Typograph>
              </TouchableOpacity>
            </ViewTitle>
            <ViewFlatList>
              {loadingOnlineCourses ? (
                <>
                  {Array.from({ length: 2 }).map(() => (
                    <PostItemSkeleton key={Math.random()} />
                  ))}
                </>
              ) : (
                <PostList data={onlineCourses} />
              )}
            </ViewFlatList>
            <ViewTitle>
              <Typograph>MARKETING DIGITAL</Typograph>
              <TouchableOpacity activeOpacity={0.8}>
                <Typograph size={17} family={typography.RobotoRegular} color={theme.colors.gray500}>
                  VER MAIS ►
                </Typograph>
              </TouchableOpacity>
            </ViewTitle>
            <ViewFlatList>
              {loadingDigitalMarketingCourses ? (
                <>
                  {Array.from({ length: 2 }).map(() => (
                    <PostItemSkeleton key={Math.random()} />
                  ))}
                </>
              ) : (
                <PostList data={digitalMarketingCourses} />
              )}
            </ViewFlatList>
            <ViewTitle>
              <Typograph>TUTORIAIS</Typograph>
              <TouchableOpacity activeOpacity={0.8}>
                <Typograph size={17} family={typography.RobotoRegular} color={theme.colors.gray500}>
                  VER MAIS ►
                </Typograph>
              </TouchableOpacity>
            </ViewTitle>
            <ViewFlatList>
              {loadingTutorialsCourses ? (
                <>
                  {Array.from({ length: 2 }).map(() => (
                    <PostItemSkeleton key={Math.random()} />
                  ))}
                </>
              ) : (
                <PostList data={tutorialsCourses} />
              )}
            </ViewFlatList>
          </View>
          <FooteerCredits />
        </ScrollView>
      </Content>
    </Container>
  );
};

export default Home;
