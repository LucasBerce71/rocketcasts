import { takeEvery } from 'redux-saga/effects';

/* Types */
import { RecommendedPodcastsTypes } from 'store/ducks/recommended-podcasts';
import { TrendingEpisodesTypes } from 'store/ducks/trending-episodes';

/* Sagas */
import { getRecommendedPodcasts } from './recommended-podcasts';
import { getTrendingEpisodes } from './trending-episodes';

export default function* root() {
  yield [
    takeEvery(RecommendedPodcastsTypes.RECOMMENDED_REQUEST, getRecommendedPodcasts),
    takeEvery(TrendingEpisodesTypes.TRENDING_REQUEST, getTrendingEpisodes),
  ];
}
