import { takeLatest } from 'redux-saga/effects';

/* Types */
import { RecommendedPodcastsTypes } from 'store/ducks/recommended-podcasts';
import { TrendingEpisodesTypes } from 'store/ducks/trending-episodes';
import { PendingEpisodesTypes } from 'store/ducks/pending-episodes';

/* Sagas */
import { getRecommendedPodcasts } from './recommended-podcasts';
import { getTrendingEpisodes } from './trending-episodes';
import { getPendingEpisodes } from './pending-episodes';

export default function* root() {
  yield [
    takeLatest(RecommendedPodcastsTypes.RECOMMENDED_REQUEST, getRecommendedPodcasts),
    takeLatest(TrendingEpisodesTypes.TRENDING_REQUEST, getTrendingEpisodes),

    takeLatest(PendingEpisodesTypes.PENDING_REQUEST, getPendingEpisodes),
    takeLatest(PendingEpisodesTypes.PENDING_REFRESH, getPendingEpisodes),
  ];
}
