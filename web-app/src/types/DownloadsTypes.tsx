export interface TikTokDownload {
	id: string;
	region: string;
	title: string;
	cover: string;
	duration: number;
	play: string;
	wmplay: string;
	hdplay: string;
	size: number;
	wm_size: number;
	hd_size: number;
	music: string;
	music_info: {
		id: string;
		title: string;
		play: string;
		author: string;
		original: boolean;
		duration: number;
		album: string;
	};
	play_count: number;
	digg_count: number;
	comment_count: number;
	share_count: number;
	download_count: number;
	collect_count: number;
	create_time: number;
	anchors: null;
	anchors_extras: string;
	is_ad: boolean;
	commerce_info: {
		adv_promotable: boolean;
		auction_ad_invited: boolean;
		branded_content_type: number;
		with_comment_filter_words: boolean;
	};
	commercial_video_info: string;
	item_comment_settings: number;
	mentioned_users: string;
	author: {
		id: string;
		unique_id: string;
		nickname: string;
		avatar: string;
	};
}

export interface TwitterDownload {
	id: string;
	createdAt: string;
	description: string;
	languange: string;
	possiblySensitive: boolean;
	possiblySensitiveEditable: boolean;
	isQuoteStatus: boolean;
	mediaCount: number;
	author: {
		username: string;
		bio: string;
		possiblySensitive: boolean;
		verified: boolean;
		location: string;
		profileBannerUrl: string;
		profileImageUrl: string;
		url: string;
		statistics: {
			favoriteCount: number;
			followersCount: number;
			friendsCount: number;
			statusesCount: number;
			listedCount: number;
			mediaCount: number;
		};
	};
	statistics: {
		replieCount: number;
		retweetCount: number;
		favoriteCount: number;
		bookmarkCount: number;
		viewCount: number;
	};
	media: {
		type: string;
		expandedUrl: string;
		cover: string;
		duration: string;
		videos: {
			bitrate: number;
			content_type: string;
			quality: string;
			url: string;
		}[];
	}[];
}

export interface YouTubeDownload {
	page: string;
	player_response: PlayerResponse;
	response: Response;
	html5player: string;
	related_videos: RelatedVideo[];
	videoDetails: YouTubeDownloadVideoDetails;
	formats: YouTubeDownloadFormat[];
	full: boolean;
}

export interface YouTubeDownloadFormat {
	mimeType: string;
	qualityLabel?: null | string;
	bitrate: number;
	audioBitrate?: number | null;
	itag: number;
	url: string;
	width?: number;
	height?: number;
	lastModified: string;
	contentLength: string;
	quality: string;
	fps?: number;
	projectionType: string;
	averageBitrate: number;
	audioQuality?: string;
	approxDurationMs: string;
	audioSampleRate?: string;
	audioChannels?: number;
	hasVideo: boolean;
	hasAudio: boolean;
	container: string;
	codecs: string;
	videoCodec: null | string;
	audioCodec: null | string;
	isLive: boolean;
	isHLS: boolean;
	isDashMPD: boolean;
	initRange?: Range;
	indexRange?: Range;
	colorInfo?: ColorInfo;
	highReplication?: boolean;
	loudnessDb?: number;
	xtags?: string;
	isDrc?: boolean;
}

export interface ColorInfo {
	primaries: string;
	transferCharacteristics: string;
	matrixCoefficients: string;
}

export interface Range {
	start: string;
	end: string;
}

export interface PlayerResponse {
	responseContext: PlayerResponseResponseContext;
	playabilityStatus: PlayabilityStatus;
	streamingData: StreamingData;
	playbackTracking: PlaybackTracking;
	captions: Captions;
	videoDetails: PlayerResponseVideoDetails;
	annotations: Annotation[];
	playerConfig: PlayerConfig;
	storyboards: Storyboards;
	microformat: Microformat;
	cards: Cards;
	trackingParams: string;
	videoQualityPromoSupportedRenderers: VideoQualityPromoSupportedRenderers;
	messages: Message[];
	endscreen: Endscreen;
	adPlacements: AdPlacement[];
	adBreakHeartbeatParams: string;
	frameworkUpdates: PlayerResponseFrameworkUpdates;
}

export interface AdPlacement {
	adPlacementRenderer: AdPlacementRenderer;
}

export interface AdPlacementRenderer {
	config: AdPlacementRendererConfig;
	renderer: Renderer;
	adSlotLoggingData: AdSlotLoggingData;
}

export interface AdSlotLoggingData {
	serializedSlotAdServingDataEntry: string;
}

export interface AdPlacementRendererConfig {
	adPlacementConfig: AdPlacementConfig;
}

export interface AdPlacementConfig {
	kind: string;
	adTimeOffset: AdTimeOffset;
	hideCueRangeMarker: boolean;
}

export interface AdTimeOffset {
	offsetStartMilliseconds: string;
	offsetEndMilliseconds: string;
}

export interface Renderer {
	clientForecastingAdRenderer: Media;
}

export interface Media {}

export interface Annotation {
	playerAnnotationsExpandedRenderer: PlayerAnnotationsExpandedRenderer;
}

export interface PlayerAnnotationsExpandedRenderer {
	featuredChannel: FeaturedChannel;
	allowSwipeDismiss: boolean;
	annotationId: string;
}

export interface FeaturedChannel {
	startTimeMs: string;
	endTimeMs: string;
	watermark: WatermarkClass;
	trackingParams: string;
	navigationEndpoint: EndpointClass;
	channelName: string;
	subscribeButton: SubscribeButtonClass;
}

export interface EndpointClass {
	clickTrackingParams: string;
	commandMetadata: OnTapCommandCommandMetadata;
	browseEndpoint: EndpointBrowseEndpoint;
}

export interface EndpointBrowseEndpoint {
	browseId: string;
}

export interface OnTapCommandCommandMetadata {
	webCommandMetadata: PurpleWebCommandMetadata;
}

export interface PurpleWebCommandMetadata {
	url: string;
	webPageType: string;
	rootVe: number;
	apiUrl: string;
}

export interface SubscribeButtonClass {
	subscribeButtonRenderer: HovercardButtonSubscribeButtonRenderer;
}

export interface HovercardButtonSubscribeButtonRenderer {
	buttonText: DetailsText;
	subscribed: boolean;
	enabled: boolean;
	type: string;
	channelId: string;
	showPreferences: boolean;
	subscribedButtonText: DetailsText;
	unsubscribedButtonText: DetailsText;
	trackingParams: string;
	unsubscribeButtonText: DetailsText;
	serviceEndpoints: ServiceEndpointElement[];
	subscribeAccessibility: DisabledAccessibilityData;
	unsubscribeAccessibility: DisabledAccessibilityData;
	signInEndpoint: PurpleSignInEndpoint;
}

export interface DetailsText {
	runs: DetailsTextRun[];
}

export interface DetailsTextRun {
	text: string;
}

export interface ServiceEndpointElement {
	clickTrackingParams: string;
	commandMetadata: UntoggledServiceEndpointCommandMetadata;
	subscribeEndpoint?: SubscribeEndpoint;
	signalServiceEndpoint?: OnUnsubscribeEndpointSignalServiceEndpoint;
}

export interface UntoggledServiceEndpointCommandMetadata {
	webCommandMetadata: FluffyWebCommandMetadata;
}

export interface FluffyWebCommandMetadata {
	sendPost: boolean;
	apiUrl?: string;
}

export interface OnUnsubscribeEndpointSignalServiceEndpoint {
	signal: string;
	actions: PurpleAction[];
}

export interface PurpleAction {
	clickTrackingParams: string;
	openPopupAction: PurpleOpenPopupAction;
}

export interface PurpleOpenPopupAction {
	popup: PurplePopup;
	popupType: string;
}

export interface PurplePopup {
	confirmDialogRenderer: ConfirmDialogRenderer;
}

export interface ConfirmDialogRenderer {
	trackingParams: string;
	dialogMessages: DetailsText[];
	confirmButton: ConfirmButton;
	cancelButton: ConfirmDialogRendererCancelButton;
	primaryIsCancel: boolean;
}

export interface ConfirmDialogRendererCancelButton {
	buttonRenderer: PurpleButtonRenderer;
}

export interface PurpleButtonRenderer {
	style: string;
	size: string;
	isDisabled: boolean;
	text: DetailsText;
	accessibility: AccessibilityData;
	trackingParams: string;
}

export interface AccessibilityData {
	label: string;
}

export interface ConfirmButton {
	buttonRenderer: ConfirmButtonButtonRenderer;
}

export interface ConfirmButtonButtonRenderer {
	style: string;
	size: string;
	isDisabled: boolean;
	text: DetailsText;
	serviceEndpoint: UnsubscribeCommand;
	accessibility: AccessibilityData;
	trackingParams: string;
}

export interface UnsubscribeCommand {
	clickTrackingParams: string;
	commandMetadata: UnsubscribeCommandCommandMetadata;
	unsubscribeEndpoint: SubscribeEndpoint;
}

export interface UnsubscribeCommandCommandMetadata {
	webCommandMetadata: TentacledWebCommandMetadata;
}

export interface TentacledWebCommandMetadata {
	sendPost: boolean;
	apiUrl: string;
}

export interface SubscribeEndpoint {
	channelIds: string[];
	params: string;
}

export interface PurpleSignInEndpoint {
	clickTrackingParams: string;
	commandMetadata: PurpleCommandMetadata;
}

export interface PurpleCommandMetadata {
	webCommandMetadata: CommonConfig;
}

export interface CommonConfig {
	url: string;
}

export interface DisabledAccessibilityData {
	accessibilityData: AccessibilityData;
}

export interface WatermarkClass {
	thumbnails: WatermarkThumbnail[];
}

export interface WatermarkThumbnail {
	url: string;
	width: number;
	height: number;
}

export interface Captions {
	playerCaptionsTracklistRenderer: PlayerCaptionsTracklistRenderer;
}

export interface PlayerCaptionsTracklistRenderer {
	captionTracks: CaptionTrack[];
	audioTracks: AudioTrack[];
	translationLanguages: TranslationLanguage[];
	defaultAudioTrackIndex: number;
}

export interface AudioTrack {
	captionTrackIndices: number[];
}

export interface CaptionTrack {
	baseUrl: string;
	name: HeaderText;
	vssId: string;
	languageCode: string;
	kind: string;
	isTranslatable: boolean;
	trackName: string;
}

export interface HeaderText {
	simpleText: string;
}

export interface TranslationLanguage {
	languageCode: string;
	languageName: HeaderText;
}

export interface Cards {
	cardCollectionRenderer: CardCollectionRenderer;
}

export interface CardCollectionRenderer {
	cards: CardCollectionRendererCard[];
	headerText: HeaderText;
	icon: CloseButton;
	closeButton: CloseButton;
	trackingParams: string;
	allowTeaserDismiss: boolean;
	logIconVisibilityUpdates: boolean;
}

export interface CardCollectionRendererCard {
	cardRenderer: CardRenderer;
}

export interface CardRenderer {
	teaser: Teaser;
	cueRanges: CueRange[];
	trackingParams: string;
}

export interface CueRange {
	startCardActiveMs: string;
	endCardActiveMs: string;
	teaserDurationMs: string;
	iconAfterTeaserMs: string;
}

export interface Teaser {
	simpleCardTeaserRenderer: SimpleCardTeaserRenderer;
}

export interface SimpleCardTeaserRenderer {
	message: HeaderText;
	trackingParams: string;
	prominent: boolean;
	logVisibilityUpdates: boolean;
	onTapCommand: OnTapCommandElement;
}

export interface OnTapCommandElement {
	clickTrackingParams: string;
	changeEngagementPanelVisibilityAction: ChangeEngagementPanelVisibilityAction;
}

export interface ChangeEngagementPanelVisibilityAction {
	targetId: string;
	visibility: string;
}

export interface CloseButton {
	infoCardIconRenderer: InfoCardIconRenderer;
}

export interface InfoCardIconRenderer {
	trackingParams: string;
}

export interface Endscreen {
	endscreenRenderer: EndscreenRenderer;
}

export interface EndscreenRenderer {
	elements: Element[];
	startMs: string;
	trackingParams: string;
}

export interface Element {
	endscreenElementRenderer: EndscreenElementRenderer;
}

export interface EndscreenElementRenderer {
	style: string;
	image: WatermarkClass;
	icon?: EndscreenElementRendererIcon;
	left: number;
	width: number;
	top: number;
	aspectRatio: number;
	startMs: string;
	endMs: string;
	title: ShortViewCountText;
	metadata: HeaderText;
	callToAction?: HeaderText;
	dismiss?: HeaderText;
	endpoint: EndscreenElementRendererEndpoint;
	hovercardButton?: SubscribeButtonClass;
	trackingParams: string;
	isSubscribe?: boolean;
	id: string;
	thumbnailOverlays?: EndscreenElementRendererThumbnailOverlay[];
}

export interface EndscreenElementRendererEndpoint {
	clickTrackingParams: string;
	commandMetadata: FluffyCommandMetadata;
	browseEndpoint?: EndpointBrowseEndpoint;
	watchEndpoint?: EndpointWatchEndpoint;
}

export interface FluffyCommandMetadata {
	webCommandMetadata: StickyWebCommandMetadata;
	interactionLoggingCommandMetadata?: InteractionLoggingCommandMetadata;
}

export interface InteractionLoggingCommandMetadata {
	loggingExpectations: LoggingExpectations;
}

export interface LoggingExpectations {
	screenCreatedLoggingExpectations: ScreenCreatedLoggingExpectations;
}

export interface ScreenCreatedLoggingExpectations {
	expectedParentScreens: ExpectedParentScreen[];
}

export interface ExpectedParentScreen {
	screenVeType: number;
}

export interface StickyWebCommandMetadata {
	url: string;
	webPageType: string;
	rootVe: number;
	apiUrl?: string;
}

export interface EndpointWatchEndpoint {
	videoId: string;
	watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig;
}

export interface WatchEndpointSupportedOnesieConfig {
	html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig;
}

export interface Html5PlaybackOnesieConfig {
	commonConfig: CommonConfig;
}

export interface EndscreenElementRendererIcon {
	thumbnails: PurpleThumbnail[];
}

export interface PurpleThumbnail {
	url: string;
}

export interface EndscreenElementRendererThumbnailOverlay {
	thumbnailOverlayTimeStatusRenderer: ThumbnailOverlayTimeStatusRenderer;
}

export interface ThumbnailOverlayTimeStatusRenderer {
	text: ShortViewCountText;
	style: string;
}

export interface ShortViewCountText {
	accessibility: DisabledAccessibilityData;
	simpleText: string;
}

export interface PlayerResponseFrameworkUpdates {
	entityBatchUpdate: PurpleEntityBatchUpdate;
}

export interface PurpleEntityBatchUpdate {
	mutations: PurpleMutation[];
	timestamp: Timestamp;
}

export interface PurpleMutation {
	entityKey: string;
	type: string;
	payload: PurplePayload;
}

export interface PurplePayload {
	offlineabilityEntity: OfflineabilityEntity;
}

export interface OfflineabilityEntity {
	key: string;
	addToOfflineButtonState: string;
}

export interface Timestamp {
	seconds: string;
	nanos: number;
}

export interface Message {
	mealbarPromoRenderer: MealbarPromoRenderer;
}

export interface MealbarPromoRenderer {
	icon: MealbarPromoRendererIcon;
	messageTexts: DetailsText[];
	actionButton: MealbarPromoRendererActionButton;
	dismissButton: MealbarPromoRendererDismissButton;
	triggerCondition: string;
	style: string;
	trackingParams: string;
	impressionEndpoints: AcceptCommand[];
	isVisible: boolean;
	messageTitle: DetailsText;
}

export interface MealbarPromoRendererActionButton {
	buttonRenderer: FluffyButtonRenderer;
}

export interface FluffyButtonRenderer {
	style: string;
	size: string;
	text: DetailsText;
	trackingParams: string;
	command: PurpleCommand;
}

export interface PurpleCommand {
	clickTrackingParams: string;
	commandExecutorCommand: PurpleCommandExecutorCommand;
}

export interface PurpleCommandExecutorCommand {
	commands: FluffyCommand[];
}

export interface FluffyCommand {
	clickTrackingParams?: string;
	commandMetadata: TentacledCommandMetadata;
	urlEndpoint?: CommandURLEndpoint;
	feedbackEndpoint?: AcceptCommandFeedbackEndpoint;
}

export interface TentacledCommandMetadata {
	webCommandMetadata: IndigoWebCommandMetadata;
}

export interface IndigoWebCommandMetadata {
	url?: string;
	webPageType?: string;
	rootVe?: number;
	sendPost?: boolean;
	apiUrl?: string;
}

export interface AcceptCommandFeedbackEndpoint {
	feedbackToken: string;
	uiActions: UIActions;
}

export interface UIActions {
	hideEnclosingContainer: boolean;
}

export interface CommandURLEndpoint {
	url: string;
	target: string;
}

export interface MealbarPromoRendererDismissButton {
	buttonRenderer: TentacledButtonRenderer;
}

export interface TentacledButtonRenderer {
	style: string;
	size: string;
	text: DetailsText;
	trackingParams: string;
	command: TentacledCommand;
}

export interface TentacledCommand {
	clickTrackingParams: string;
	commandExecutorCommand: FluffyCommandExecutorCommand;
}

export interface FluffyCommandExecutorCommand {
	commands: AcceptCommand[];
}

export interface AcceptCommand {
	clickTrackingParams: string;
	commandMetadata: UnsubscribeCommandCommandMetadata;
	feedbackEndpoint: AcceptCommandFeedbackEndpoint;
}

export interface MealbarPromoRendererIcon {
	thumbnails: IconImageElement[];
}

export interface IconImageElement {
	url: string;
	width: number;
	height: number;
}

export interface Microformat {
	playerMicroformatRenderer: PlayerMicroformatRenderer;
}

export interface PlayerMicroformatRenderer {
	thumbnail: WatermarkClass;
	embed: Embed;
	title: HeaderText;
	description: HeaderText;
	lengthSeconds: string;
	ownerProfileUrl: string;
	externalChannelId: string;
	isFamilySafe: boolean;
	availableCountries: string[];
	isUnlisted: boolean;
	hasYpcMetadata: boolean;
	viewCount: string;
	category: string;
	publishDate: string;
	ownerChannelName: string;
	uploadDate: string;
	isShortsEligible: boolean;
}

export interface Embed {
	iframeUrl: string;
	width: number;
	height: number;
}

export interface PlayabilityStatus {
	status: string;
	playableInEmbed: boolean;
	pictureInPicture: PictureInPicture;
	miniplayer: Miniplayer;
	contextParams: string;
}

export interface Miniplayer {
	miniplayerRenderer: MiniplayerRenderer;
}

export interface MiniplayerRenderer {
	playbackMode: string;
}

export interface PictureInPicture {
	pictureInPictureRenderer: PictureInPictureRenderer;
}

export interface PictureInPictureRenderer {
	playableInPip: boolean;
}

export interface PlaybackTracking {
	videostatsPlaybackUrl: PtrackingURLClass;
	videostatsDelayplayUrl: PtrackingURLClass;
	videostatsWatchtimeUrl: PtrackingURLClass;
	ptrackingUrl: PtrackingURLClass;
	qoeUrl: PtrackingURLClass;
	atrUrl: AtrURLClass;
	videostatsScheduledFlushWalltimeSeconds: number[];
	videostatsDefaultFlushIntervalSeconds: number;
	youtubeRemarketingUrl: AtrURLClass;
	googleRemarketingUrl: AtrURLClass;
}

export interface AtrURLClass {
	baseUrl: string;
	elapsedMediaTimeSeconds: number;
}

export interface PtrackingURLClass {
	baseUrl: string;
}

export interface PlayerConfig {
	audioConfig: AudioConfig;
	streamSelectionConfig: StreamSelectionConfig;
	mediaCommonConfig: MediaCommonConfig;
	webPlayerConfig: WebPlayerConfig;
}

export interface AudioConfig {
	loudnessDb: number;
	perceptualLoudnessDb: number;
	enablePerFormatLoudness: boolean;
}

export interface MediaCommonConfig {
	dynamicReadaheadConfig: DynamicReadaheadConfig;
	mediaUstreamerRequestConfig: MediaUstreamerRequestConfig;
	useServerDrivenAbr: boolean;
	serverPlaybackStartConfig: ServerPlaybackStartConfig;
}

export interface DynamicReadaheadConfig {
	maxReadAheadMediaTimeMs: number;
	minReadAheadMediaTimeMs: number;
	readAheadGrowthRateMs: number;
}

export interface MediaUstreamerRequestConfig {
	videoPlaybackUstreamerConfig: string;
}

export interface ServerPlaybackStartConfig {
	enable: boolean;
	playbackStartPolicy: PlaybackStartPolicy;
}

export interface PlaybackStartPolicy {
	startMinReadaheadPolicy: StartMinReadaheadPolicy[];
}

export interface StartMinReadaheadPolicy {
	minReadaheadMs: number;
}

export interface StreamSelectionConfig {
	maxBitrate: string;
}

export interface WebPlayerConfig {
	useCobaltTvosDash: boolean;
	webPlayerActionsPorting: WebPlayerActionsPorting;
}

export interface WebPlayerActionsPorting {
	getSharePanelCommand: GetSharePanelCommand;
	subscribeCommand: SubscribeCommand;
	unsubscribeCommand: UnsubscribeCommand;
	addToWatchLaterCommand: AddToWatchLaterCommand;
	removeFromWatchLaterCommand: RemoveFromWatchLaterCommand;
}

export interface AddToWatchLaterCommand {
	clickTrackingParams: string;
	commandMetadata: UnsubscribeCommandCommandMetadata;
	playlistEditEndpoint: AddToWatchLaterCommandPlaylistEditEndpoint;
}

export interface AddToWatchLaterCommandPlaylistEditEndpoint {
	playlistId: string;
	actions: FluffyAction[];
}

export interface FluffyAction {
	addedVideoId: string;
	action: string;
}

export interface GetSharePanelCommand {
	clickTrackingParams: string;
	commandMetadata: UnsubscribeCommandCommandMetadata;
	webPlayerShareEntityServiceEndpoint: WebPlayerShareEntityServiceEndpoint;
}

export interface WebPlayerShareEntityServiceEndpoint {
	serializedShareEntity: string;
}

export interface RemoveFromWatchLaterCommand {
	clickTrackingParams: string;
	commandMetadata: UnsubscribeCommandCommandMetadata;
	playlistEditEndpoint: RemoveFromWatchLaterCommandPlaylistEditEndpoint;
}

export interface RemoveFromWatchLaterCommandPlaylistEditEndpoint {
	playlistId: string;
	actions: TentacledAction[];
}

export interface TentacledAction {
	action: string;
	removedVideoId: string;
}

export interface SubscribeCommand {
	clickTrackingParams: string;
	commandMetadata: UnsubscribeCommandCommandMetadata;
	subscribeEndpoint: SubscribeEndpoint;
}

export interface PlayerResponseResponseContext {
	serviceTrackingParams: ServiceTrackingParam[];
	maxAgeSeconds: number;
	mainAppWebResponseContext: MainAppWebResponseContext;
	webResponseContextExtensionData: PurpleWebResponseContextExtensionData;
}

export interface MainAppWebResponseContext {
	loggedOut: boolean;
	trackingParam: string;
}

export interface ServiceTrackingParam {
	service: string;
	params: Param[];
}

export interface Param {
	key: string;
	value: string;
}

export interface PurpleWebResponseContextExtensionData {
	hasDecorated: boolean;
}

export interface Storyboards {
	playerStoryboardSpecRenderer: PlayerStoryboardSpecRenderer;
}

export interface PlayerStoryboardSpecRenderer {
	spec: string;
	recommendedLevel: number;
	highResolutionRecommendedLevel: number;
}

export interface StreamingData {
	expiresInSeconds: string;
	formats: StreamingDataFormat[];
	adaptiveFormats: AdaptiveFormat[];
	serverAbrStreamingUrl: string;
}

export interface AdaptiveFormat {
	itag: number;
	url: string;
	mimeType: string;
	bitrate: number;
	width?: number;
	height?: number;
	initRange: Range;
	indexRange: Range;
	lastModified: string;
	contentLength: string;
	quality: string;
	fps?: number;
	qualityLabel?: string;
	projectionType: string;
	averageBitrate: number;
	colorInfo?: ColorInfo;
	approxDurationMs: string;
	highReplication?: boolean;
	audioQuality?: string;
	audioSampleRate?: string;
	audioChannels?: number;
	loudnessDb?: number;
	xtags?: string;
	isDrc?: boolean;
}

export interface StreamingDataFormat {
	itag: number;
	url: string;
	mimeType: string;
	bitrate: number;
	width: number;
	height: number;
	lastModified: string;
	contentLength: string;
	quality: string;
	fps: number;
	qualityLabel: string;
	projectionType: string;
	averageBitrate: number;
	audioQuality: string;
	approxDurationMs: string;
	audioSampleRate: string;
	audioChannels: number;
}

export interface PlayerResponseVideoDetails {
	videoId: string;
	title: string;
	lengthSeconds: string;
	keywords: string[];
	channelId: string;
	isOwnerViewing: boolean;
	shortDescription: string;
	isCrawlable: boolean;
	thumbnail: FluffyThumbnail;
	allowRatings: boolean;
	viewCount: string;
	author: string;
	isPrivate: boolean;
	isUnpluggedCorpus: boolean;
	isLiveContent: boolean;
}

export interface FluffyThumbnail {
	thumbnails: TentacledThumbnail[];
}

export interface TentacledThumbnail {
	url: string;
	width: number;
	height: number;
}

export interface VideoQualityPromoSupportedRenderers {
	videoQualityPromoRenderer: VideoQualityPromoRenderer;
}

export interface VideoQualityPromoRenderer {
	triggerCriteria: TriggerCriteria;
	text: VideoQualityPromoRendererText;
	endpoint: VideoQualityPromoRendererEndpoint;
	trackingParams: string;
	snackbar: Snackbar;
}

export interface VideoQualityPromoRendererEndpoint {
	clickTrackingParams: string;
	commandMetadata: StickyCommandMetadata;
	urlEndpoint: CommandURLEndpoint;
}

export interface StickyCommandMetadata {
	webCommandMetadata: IndecentWebCommandMetadata;
}

export interface IndecentWebCommandMetadata {
	url: string;
	webPageType: string;
	rootVe: number;
}

export interface Snackbar {
	notificationActionRenderer: SnackbarNotificationActionRenderer;
}

export interface SnackbarNotificationActionRenderer {
	responseText: DetailsText;
	actionButton: PurpleActionButton;
	trackingParams: string;
}

export interface PurpleActionButton {
	buttonRenderer: StickyButtonRenderer;
}

export interface StickyButtonRenderer {
	text: DetailsText;
	navigationEndpoint: VideoQualityPromoRendererEndpoint;
	trackingParams: string;
}

export interface VideoQualityPromoRendererText {
	runs: PurpleRun[];
}

export interface PurpleRun {
	text: string;
	bold?: boolean;
}

export interface TriggerCriteria {
	connectionWhitelist: string[];
	joinLatencySeconds: number;
	rebufferTimeSeconds: number;
	watchTimeWindowSeconds: number;
	refractorySeconds: number;
}

export interface RelatedVideo {
	id: string;
	title: string;
	published: string;
	author: RelatedVideoAuthor;
	short_view_count_text: string;
	view_count: string;
	length_seconds: number;
	thumbnails: WatermarkThumbnail[];
	richThumbnails: RichThumbnailElement[];
	isLive: boolean;
}

export interface RelatedVideoAuthor {
	id: string;
	name: string;
	user: string;
	channel_url: string;
	user_url: string;
	thumbnails: AuthorThumbnail[];
	verified: boolean;
}

export interface AuthorThumbnail {
	url: string;
	width: number;
	height: number;
}

export interface RichThumbnailElement {
	url: string;
	width: number;
	height: number;
}

export interface Response {
	responseContext: ResponseResponseContext;
	contents: Contents;
	currentVideoEndpoint: CurrentVideoEndpointClass;
	trackingParams: string;
	playerOverlays: PlayerOverlays;
	overlay: Overlay;
	onResponseReceivedEndpoints: OnResponseReceivedEndpoint[];
	engagementPanels: EngagementPanel[];
	topbar: Topbar;
	pageVisualEffects: PageVisualEffect[];
	frameworkUpdates: ResponseFrameworkUpdates;
}

export interface Contents {
	twoColumnWatchNextResults: TwoColumnWatchNextResults;
}

export interface TwoColumnWatchNextResults {
	results: TwoColumnWatchNextResultsResults;
	secondaryResults: TwoColumnWatchNextResultsSecondaryResults;
	autoplay: TwoColumnWatchNextResultsAutoplay;
}

export interface TwoColumnWatchNextResultsAutoplay {
	autoplay: AutoplayAutoplay;
}

export interface AutoplayAutoplay {
	sets: Set[];
	countDownSecs: number;
	trackingParams: string;
}

export interface Set {
	mode: string;
	autoplayVideo: NavigationEndpointElement;
}

export interface NavigationEndpointElement {
	clickTrackingParams: string;
	commandMetadata: AutoplayVideoCommandMetadata;
	watchEndpoint: AutoplayVideoWatchEndpoint;
}

export interface AutoplayVideoCommandMetadata {
	webCommandMetadata: HilariousWebCommandMetadata;
}

export interface HilariousWebCommandMetadata {
	url: string;
	webPageType: string;
	rootVe: number;
}

export interface AutoplayVideoWatchEndpoint {
	videoId: string;
	params: string;
	playerParams: string;
	watchEndpointSupportedPrefetchConfig: WatchEndpointSupportedPrefetchConfig;
}

export interface WatchEndpointSupportedPrefetchConfig {
	prefetchHintConfig: PrefetchHintConfig;
}

export interface PrefetchHintConfig {
	prefetchPriority: number;
	countdownUiRelativeSecondsPrefetchCondition: number;
}

export interface TwoColumnWatchNextResultsResults {
	results: ResultsResults;
}

export interface ResultsResults {
	contents: ResultsContent[];
	trackingParams: string;
}

export interface ResultsContent {
	videoPrimaryInfoRenderer?: VideoPrimaryInfoRenderer;
	videoSecondaryInfoRenderer?: VideoSecondaryInfoRenderer;
	merchandiseShelfRenderer?: MerchandiseShelfRenderer;
	itemSectionRenderer?: ItemSectionRenderer;
}

export interface ItemSectionRenderer {
	contents: ItemSectionRendererContent[];
	trackingParams: string;
	sectionIdentifier: string;
	targetId: string;
}

export interface ItemSectionRendererContent {
	continuationItemRenderer: PurpleContinuationItemRenderer;
}

export interface PurpleContinuationItemRenderer {
	trigger: string;
	continuationEndpoint: ContinuationEndpoint;
}

export interface ContinuationEndpoint {
	clickTrackingParams: string;
	commandMetadata: UnsubscribeCommandCommandMetadata;
	continuationCommand: ContinuationEndpointContinuationCommand;
}

export interface ContinuationEndpointContinuationCommand {
	token: string;
	request: string;
}

export interface MerchandiseShelfRenderer {
	items: MerchandiseShelfRendererItem[];
	trackingParams: string;
	showText: string;
	hideText: string;
	shelfType: string;
	titleFormatted: TitleFormattedClass;
}

export interface MerchandiseShelfRendererItem {
	merchandiseItemRenderer: MerchandiseItemRenderer;
}

export interface MerchandiseItemRenderer {
	title: string;
	description: string;
	thumbnail: ChannelThumbnailClass;
	price: string;
	vendorName: string;
	trackingParams: string;
	buttonText: string;
	buttonCommand: ButtonCommandClass;
	accessibilityTitle: string;
	buttonAccessibilityText: string;
	fromVendorText: string;
	additionalFeesText: string;
	showOpenInNewIcon: boolean;
}

export interface ButtonCommandClass {
	clickTrackingParams: string;
	commandExecutorCommand: ButtonCommandCommandExecutorCommand;
}

export interface ButtonCommandCommandExecutorCommand {
	commands: StickyCommand[];
}

export interface StickyCommand {
	clickTrackingParams: string;
	commandMetadata: TentacledCommandMetadata;
	feedbackEndpoint?: PurpleFeedbackEndpoint;
	urlEndpoint?: CommandURLEndpoint;
}

export interface PurpleFeedbackEndpoint {
	feedbackToken: string;
}

export interface ChannelThumbnailClass {
	thumbnails: AuthorThumbnail[];
}

export interface TitleFormattedClass {
	runs: TitleFormattedRun[];
}

export interface TitleFormattedRun {
	text: string;
	navigationEndpoint?: RunNavigationEndpoint;
}

export interface RunNavigationEndpoint {
	clickTrackingParams: string;
	commandMetadata: IndigoCommandMetadata;
	openPopupAction: NavigationEndpointOpenPopupAction;
}

export interface IndigoCommandMetadata {
	webCommandMetadata: AmbitiousWebCommandMetadata;
}

export interface AmbitiousWebCommandMetadata {
	url: string;
}

export interface NavigationEndpointOpenPopupAction {
	popup: FluffyPopup;
	popupType: string;
}

export interface FluffyPopup {
	menuPopupRenderer: PurpleMenuPopupRenderer;
}

export interface PurpleMenuPopupRenderer {
	items: PurpleItem[];
	menuPopupAccessibility: AccessibilityData;
}

export interface PurpleItem {
	menuServiceItemRenderer: PurpleMenuServiceItemRenderer;
}

export interface PurpleMenuServiceItemRenderer {
	text: ShortViewCountText;
	icon: IconImageClass;
	serviceEndpoint: PurpleServiceEndpoint;
	trackingParams: string;
	loggingDirectives?: MenuServiceItemRendererLoggingDirectives;
}

export interface IconImageClass {
	iconType: string;
}

export interface MenuServiceItemRendererLoggingDirectives {
	trackingParams: string;
	visibility: Visibility;
	gestures: Visibility;
}

export interface Visibility {
	types: string;
}

export interface PurpleServiceEndpoint {
	clickTrackingParams: string;
	openPopupAction?: ServiceEndpointOpenPopupAction;
	commandMetadata?: StickyCommandMetadata;
	signInEndpoint?: ServiceEndpointSignInEndpoint;
}

export interface ServiceEndpointOpenPopupAction {
	popup: TentacledPopup;
	popupType: string;
}

export interface TentacledPopup {
	fancyDismissibleDialogRenderer: FancyDismissibleDialogRenderer;
}

export interface FancyDismissibleDialogRenderer {
	dialogMessage: DialogMessage;
	confirmLabel: HeaderText;
	trackingParams: string;
}

export interface DialogMessage {
	runs: FluffyRun[];
}

export interface FluffyRun {
	text: string;
	textColor?: number;
	navigationEndpoint?: VideoQualityPromoRendererEndpoint;
}

export interface ServiceEndpointSignInEndpoint {
	nextEndpoint: PurpleNextEndpoint;
}

export interface PurpleNextEndpoint {
	clickTrackingParams: string;
	commandMetadata: UnsubscribeCommandCommandMetadata;
	getReportFormEndpoint: GetTranscriptEndpointClass;
}

export interface GetTranscriptEndpointClass {
	params: string;
}

export interface VideoPrimaryInfoRenderer {
	title: DetailsText;
	viewCount: ViewCount;
	videoActions: VideoActions;
	trackingParams: string;
	superTitleLink: HeaderText;
	dateText: HeaderText;
	relativeDateText: ShortViewCountText;
}

export interface VideoActions {
	menuRenderer: VideoActionsMenuRenderer;
}

export interface VideoActionsMenuRenderer {
	items: FluffyItem[];
	trackingParams: string;
	topLevelButtons: TopLevelButtonElement[];
	accessibility: DisabledAccessibilityData;
	flexibleItems: FlexibleItem[];
}

export interface FlexibleItem {
	menuFlexibleItemRenderer: MenuFlexibleItemRenderer;
}

export interface MenuFlexibleItemRenderer {
	menuItem: MenuItem;
	topLevelButton: MenuFlexibleItemRendererTopLevelButton;
}

export interface MenuItem {
	menuServiceItemDownloadRenderer?: MenuItemMenuServiceItemDownloadRenderer;
	menuServiceItemRenderer?: MenuItemMenuServiceItemRenderer;
}

export interface MenuItemMenuServiceItemDownloadRenderer {
	serviceEndpoint: MenuServiceItemDownloadRendererCommand;
	trackingParams: string;
}

export interface MenuServiceItemDownloadRendererCommand {
	clickTrackingParams: string;
	offlineVideoEndpoint: CommandOfflineVideoEndpoint;
}

export interface CommandOfflineVideoEndpoint {
	videoId: string;
	onAddCommand: PurpleOnAddCommand;
}

export interface PurpleOnAddCommand {
	clickTrackingParams: string;
	getDownloadActionCommand: PurpleGetDownloadActionCommand;
}

export interface PurpleGetDownloadActionCommand {
	videoId: string;
	params: string;
	offlineabilityEntityKey: string;
}

export interface MenuItemMenuServiceItemRenderer {
	text: DetailsText;
	icon: IconImageClass;
	serviceEndpoint: InnertubeCommandClass;
	trackingParams: string;
}

export interface InnertubeCommandClass {
	clickTrackingParams: string;
	commandMetadata: IndecentCommandMetadata;
	modalEndpoint: ServiceEndpointModalEndpoint;
}

export interface IndecentCommandMetadata {
	webCommandMetadata: CunningWebCommandMetadata;
}

export interface CunningWebCommandMetadata {
	ignoreNavigation: boolean;
}

export interface ServiceEndpointModalEndpoint {
	modal: PurpleModal;
}

export interface PurpleModal {
	modalWithTitleAndButtonRenderer: PurpleModalWithTitleAndButtonRenderer;
}

export interface PurpleModalWithTitleAndButtonRenderer {
	title: DetailsText;
	content: DetailsText;
	button: PurpleButton;
}

export interface PurpleButton {
	buttonRenderer: IndigoButtonRenderer;
}

export interface IndigoButtonRenderer {
	style: string;
	size: string;
	isDisabled: boolean;
	text: HeaderText;
	navigationEndpoint: PurpleNavigationEndpoint;
	trackingParams: string;
}

export interface PurpleNavigationEndpoint {
	clickTrackingParams: string;
	commandMetadata: StickyCommandMetadata;
	signInEndpoint: FluffySignInEndpoint;
}

export interface FluffySignInEndpoint {
	nextEndpoint: CurrentVideoEndpointClass;
	idamTag: string;
}

export interface CurrentVideoEndpointClass {
	clickTrackingParams: string;
	commandMetadata: AutoplayVideoCommandMetadata;
	watchEndpoint: EndpointWatchEndpoint;
}

export interface MenuFlexibleItemRendererTopLevelButton {
	downloadButtonRenderer?: DownloadButtonRenderer;
	buttonViewModel?: PurpleButtonViewModel;
}

export interface PurpleButtonViewModel {
	iconName: string;
	title: string;
	onTap: PurpleOnTap;
	accessibilityText: string;
	style: string;
	trackingParams: string;
	isFullWidth: boolean;
	type: string;
	buttonSize: string;
	tooltip: string;
}

export interface PurpleOnTap {
	serialCommand: PurpleSerialCommand;
}

export interface PurpleSerialCommand {
	commands: IndigoCommand[];
}

export interface IndigoCommand {
	logGestureCommand?: LogGestureCommand;
	innertubeCommand?: InnertubeCommandClass;
}

export interface LogGestureCommand {
	gestureType: string;
	trackingParams: string;
}

export interface DownloadButtonRenderer {
	trackingParams: string;
	style: string;
	size: string;
	targetId: string;
	command: MenuServiceItemDownloadRendererCommand;
}

export interface FluffyItem {
	menuNavigationItemRenderer: MenuNavigationItemRenderer;
}

export interface MenuNavigationItemRenderer {
	text: DetailsText;
	icon: IconImageClass;
	navigationEndpoint: MenuNavigationItemRendererNavigationEndpoint;
	trackingParams: string;
}

export interface MenuNavigationItemRendererNavigationEndpoint {
	clickTrackingParams: string;
	commandMetadata: IndecentCommandMetadata;
	modalEndpoint: NavigationEndpointModalEndpoint;
}

export interface NavigationEndpointModalEndpoint {
	modal: FluffyModal;
}

export interface FluffyModal {
	modalWithTitleAndButtonRenderer: FluffyModalWithTitleAndButtonRenderer;
}

export interface FluffyModalWithTitleAndButtonRenderer {
	title: DetailsText;
	content: DetailsText;
	button: FluffyButton;
}

export interface FluffyButton {
	buttonRenderer: IndecentButtonRenderer;
}

export interface IndecentButtonRenderer {
	style: string;
	size: string;
	isDisabled: boolean;
	text: HeaderText;
	navigationEndpoint: FluffyNavigationEndpoint;
	trackingParams: string;
}

export interface FluffyNavigationEndpoint {
	clickTrackingParams: string;
	commandMetadata: StickyCommandMetadata;
	signInEndpoint: AdsEngagementPanelContentRenderer;
}

export interface AdsEngagementPanelContentRenderer {
	hack: boolean;
}

export interface TopLevelButtonElement {
	segmentedLikeDislikeButtonViewModel?: SegmentedLikeDislikeButtonViewModel;
	buttonViewModel?: FluffyButtonViewModel;
}

export interface FluffyButtonViewModel {
	iconName: string;
	title: string;
	onTap: FluffyOnTap;
	accessibilityText: string;
	style: string;
	trackingParams: string;
	isFullWidth: boolean;
	type: string;
	buttonSize: string;
	state: string;
	accessibilityId: string;
	tooltip: string;
}

export interface FluffyOnTap {
	serialCommand: FluffySerialCommand;
}

export interface FluffySerialCommand {
	commands: IndecentCommand[];
}

export interface IndecentCommand {
	logGestureCommand?: LogGestureCommand;
	innertubeCommand?: CommandClass;
}

export interface CommandClass {
	clickTrackingParams: string;
	commandMetadata: UnsubscribeCommandCommandMetadata;
	shareEntityServiceEndpoint: ShareEntityServiceEndpoint;
}

export interface ShareEntityServiceEndpoint {
	serializedShareEntity: string;
	commands: ShareEntityServiceEndpointCommand[];
}

export interface ShareEntityServiceEndpointCommand {
	clickTrackingParams: string;
	openPopupAction: FluffyOpenPopupAction;
}

export interface FluffyOpenPopupAction {
	popup: StickyPopup;
	popupType: string;
	beReused: boolean;
}

export interface StickyPopup {
	unifiedSharePanelRenderer: UnifiedSharePanelRenderer;
}

export interface UnifiedSharePanelRenderer {
	trackingParams: string;
	showLoadingSpinner: boolean;
}

export interface SegmentedLikeDislikeButtonViewModel {
	likeButtonViewModel: SegmentedLikeDislikeButtonViewModelLikeButtonViewModel;
	dislikeButtonViewModel: SegmentedLikeDislikeButtonViewModelDislikeButtonViewModel;
	iconType: string;
	likeCountEntity: VisibleOnLoad;
	dynamicLikeCountUpdateData: DynamicLikeCountUpdateData;
	teasersOrderEntityKey: string;
}

export interface SegmentedLikeDislikeButtonViewModelDislikeButtonViewModel {
	dislikeButtonViewModel: DislikeButtonViewModelDislikeButtonViewModel;
}

export interface DislikeButtonViewModelDislikeButtonViewModel {
	toggleButtonViewModel: DislikeButtonViewModelToggleButtonViewModel;
	dislikeEntityKey: string;
}

export interface DislikeButtonViewModelToggleButtonViewModel {
	toggleButtonViewModel: PurpleToggleButtonViewModel;
}

export interface PurpleToggleButtonViewModel {
	defaultButtonViewModel: PurpleDefaultButtonViewModel;
	toggledButtonViewModel: ToggledButtonViewModel;
	trackingParams: string;
	isTogglingDisabled: boolean;
}

export interface PurpleDefaultButtonViewModel {
	buttonViewModel: TentacledButtonViewModel;
}

export interface TentacledButtonViewModel {
	iconName: string;
	title: string;
	onTap: TentacledOnTap;
	accessibilityText: string;
	style: string;
	trackingParams: string;
	isFullWidth: boolean;
	type: string;
	buttonSize: string;
	accessibilityId: string;
	tooltip: string;
}

export interface TentacledOnTap {
	serialCommand: TentacledSerialCommand;
}

export interface TentacledSerialCommand {
	commands: HilariousCommand[];
}

export interface HilariousCommand {
	logGestureCommand?: LogGestureCommand;
	innertubeCommand?: PurpleInnertubeCommand;
}

export interface PurpleInnertubeCommand {
	clickTrackingParams: string;
	commandMetadata: IndecentCommandMetadata;
	modalEndpoint: PurpleModalEndpoint;
}

export interface PurpleModalEndpoint {
	modal: TentacledModal;
}

export interface TentacledModal {
	modalWithTitleAndButtonRenderer: TentacledModalWithTitleAndButtonRenderer;
}

export interface TentacledModalWithTitleAndButtonRenderer {
	title: HeaderText;
	content: HeaderText;
	button: TentacledButton;
}

export interface TentacledButton {
	buttonRenderer: HilariousButtonRenderer;
}

export interface HilariousButtonRenderer {
	style: string;
	size: string;
	isDisabled: boolean;
	text: HeaderText;
	navigationEndpoint: TentacledNavigationEndpoint;
	trackingParams: string;
}

export interface TentacledNavigationEndpoint {
	clickTrackingParams: string;
	commandMetadata: StickyCommandMetadata;
	signInEndpoint: TentacledSignInEndpoint;
}

export interface TentacledSignInEndpoint {
	nextEndpoint: FluffyNextEndpoint;
	idamTag: string;
}

export interface FluffyNextEndpoint {
	clickTrackingParams: string;
	commandMetadata: UnsubscribeCommandCommandMetadata;
	likeEndpoint: PurpleLikeEndpoint;
}

export interface PurpleLikeEndpoint {
	status: string;
	target: Target;
	dislikeParams: string;
}

export interface Target {
	videoId: string;
}

export interface ToggledButtonViewModel {
	buttonViewModel: ToggledButtonViewModelButtonViewModel;
}

export interface ToggledButtonViewModelButtonViewModel {
	iconName: string;
	title: string;
	onTap: StickyOnTap;
	accessibilityText: string;
	style: string;
	trackingParams: string;
	isFullWidth: boolean;
	type: string;
	buttonSize: string;
	accessibilityId: string;
	tooltip: string;
}

export interface StickyOnTap {
	serialCommand: StickySerialCommand;
}

export interface StickySerialCommand {
	commands: AmbitiousCommand[];
}

export interface AmbitiousCommand {
	logGestureCommand?: LogGestureCommand;
	innertubeCommand?: FluffyInnertubeCommand;
}

export interface FluffyInnertubeCommand {
	clickTrackingParams: string;
	commandMetadata: UnsubscribeCommandCommandMetadata;
	likeEndpoint: InnertubeCommandLikeEndpoint;
}

export interface InnertubeCommandLikeEndpoint {
	status: string;
	target: Target;
	removeLikeParams: string;
}

export interface DynamicLikeCountUpdateData {
	updateStatusKey: string;
	placeholderLikeCountValuesKey: string;
	updateDelayLoopId: string;
	updateDelaySec: number;
}

export interface SegmentedLikeDislikeButtonViewModelLikeButtonViewModel {
	likeButtonViewModel: LikeButtonViewModelLikeButtonViewModel;
}

export interface LikeButtonViewModelLikeButtonViewModel {
	toggleButtonViewModel: LikeButtonViewModelToggleButtonViewModel;
	likeStatusEntityKey: string;
	likeStatusEntity: LikeStatusEntity;
}

export interface LikeStatusEntity {
	key: string;
	likeStatus: string;
}

export interface LikeButtonViewModelToggleButtonViewModel {
	toggleButtonViewModel: FluffyToggleButtonViewModel;
}

export interface FluffyToggleButtonViewModel {
	defaultButtonViewModel: FluffyDefaultButtonViewModel;
	toggledButtonViewModel: ToggledButtonViewModel;
	identifier: string;
	trackingParams: string;
	isTogglingDisabled: boolean;
}

export interface FluffyDefaultButtonViewModel {
	buttonViewModel: StickyButtonViewModel;
}

export interface StickyButtonViewModel {
	iconName: string;
	title: string;
	onTap: IndigoOnTap;
	accessibilityText: string;
	style: string;
	trackingParams: string;
	isFullWidth: boolean;
	type: string;
	buttonSize: string;
	accessibilityId: string;
	tooltip: string;
}

export interface IndigoOnTap {
	serialCommand: IndigoSerialCommand;
}

export interface IndigoSerialCommand {
	commands: CunningCommand[];
}

export interface CunningCommand {
	logGestureCommand?: LogGestureCommand;
	innertubeCommand?: TentacledInnertubeCommand;
}

export interface TentacledInnertubeCommand {
	clickTrackingParams: string;
	commandMetadata: IndecentCommandMetadata;
	modalEndpoint: FluffyModalEndpoint;
}

export interface FluffyModalEndpoint {
	modal: StickyModal;
}

export interface StickyModal {
	modalWithTitleAndButtonRenderer: StickyModalWithTitleAndButtonRenderer;
}

export interface StickyModalWithTitleAndButtonRenderer {
	title: HeaderText;
	content: HeaderText;
	button: StickyButton;
}

export interface StickyButton {
	buttonRenderer: AmbitiousButtonRenderer;
}

export interface AmbitiousButtonRenderer {
	style: string;
	size: string;
	isDisabled: boolean;
	text: HeaderText;
	navigationEndpoint: StickyNavigationEndpoint;
	trackingParams: string;
}

export interface StickyNavigationEndpoint {
	clickTrackingParams: string;
	commandMetadata: StickyCommandMetadata;
	signInEndpoint: StickySignInEndpoint;
}

export interface StickySignInEndpoint {
	nextEndpoint: TentacledNextEndpoint;
	idamTag: string;
}

export interface TentacledNextEndpoint {
	clickTrackingParams: string;
	commandMetadata: UnsubscribeCommandCommandMetadata;
	likeEndpoint: FluffyLikeEndpoint;
}

export interface FluffyLikeEndpoint {
	status: string;
	target: Target;
	likeParams: string;
}

export interface VisibleOnLoad {
	key: string;
}

export interface ViewCount {
	videoViewCountRenderer: VideoViewCountRenderer;
}

export interface VideoViewCountRenderer {
	viewCount: HeaderText;
	shortViewCount: HeaderText;
	originalViewCount: string;
}

export interface VideoSecondaryInfoRenderer {
	owner: Owner;
	subscribeButton: SubscribeButton;
	metadataRowContainer: MetadataRowContainer;
	showMoreText: HeaderText;
	showLessText: HeaderText;
	trackingParams: string;
	defaultExpanded: boolean;
	descriptionCollapsedLines: number;
	showMoreCommand: ShowMoreCommandClass;
	showLessCommand: OnTapCommandElement;
	attributedDescription: AttributedDescription;
	headerRuns: HeaderRun[];
}

export interface AttributedDescription {
	content: string;
	commandRuns: CommandRun[];
	styleRuns: StyleRun[];
}

export interface CommandRun {
	startIndex: number;
	length: number;
	onTap: CommandRunOnTap;
	loggingDirectives?: InfoCardIconRenderer;
}

export interface CommandRunOnTap {
	innertubeCommand: OnTapInnertubeCommand;
}

export interface OnTapInnertubeCommand {
	clickTrackingParams: string;
	commandMetadata: HilariousCommandMetadata;
	urlEndpoint?: PurpleURLEndpoint;
	watchEndpoint?: InnertubeCommandWatchEndpoint;
}

export interface HilariousCommandMetadata {
	webCommandMetadata: IndecentWebCommandMetadata;
}

export interface PurpleURLEndpoint {
	url: string;
	target: string;
	nofollow: boolean;
}

export interface InnertubeCommandWatchEndpoint {
	videoId: string;
	continuePlayback: boolean;
	startTimeSeconds: number;
	watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig;
}

export interface StyleRun {
	startIndex: number;
	length: number;
	styleRunExtensions: StyleRunExtensions;
	fontFamilyName: string;
}

export interface StyleRunExtensions {
	styleRunColorMapExtension: StyleRunColorMapExtension;
}

export interface StyleRunColorMapExtension {
	colorMap: SampledColor[];
}

export interface SampledColor {
	key: string;
	value: number;
}

export interface HeaderRun {
	startIndex: number;
	length: number;
	headerMapping: string;
}

export interface MetadataRowContainer {
	metadataRowContainerRenderer: MetadataRowContainerRenderer;
}

export interface MetadataRowContainerRenderer {
	collapsedItemCount: number;
	trackingParams: string;
}

export interface Owner {
	videoOwnerRenderer: VideoOwnerRenderer;
}

export interface VideoOwnerRenderer {
	thumbnail: ChannelThumbnailClass;
	title: Byline;
	subscriptionButton: DismissStrategy;
	navigationEndpoint: ChannelNavigationEndpointClass;
	subscriberCountText: ShortViewCountText;
	trackingParams: string;
	badges: OwnerBadgeElement[];
	membershipButton: MembershipButton;
}

export interface OwnerBadgeElement {
	metadataBadgeRenderer: OwnerBadgeMetadataBadgeRenderer;
}

export interface OwnerBadgeMetadataBadgeRenderer {
	icon: IconImageClass;
	style: string;
	tooltip: string;
	trackingParams: string;
	accessibilityData: AccessibilityData;
}

export interface MembershipButton {
	timedAnimationButtonRenderer: TimedAnimationButtonRenderer;
}

export interface TimedAnimationButtonRenderer {
	buttonRenderer: TimedAnimationButtonRendererButtonRenderer;
}

export interface TimedAnimationButtonRendererButtonRenderer {
	buttonRenderer: ButtonRendererButtonRenderer;
}

export interface ButtonRendererButtonRenderer {
	style: string;
	size: string;
	isDisabled: boolean;
	text: DetailsText;
	navigationEndpoint: MenuNavigationItemRendererNavigationEndpoint;
	trackingParams: string;
	accessibilityData: DisabledAccessibilityData;
	targetId: string;
}

export interface ChannelNavigationEndpointClass {
	clickTrackingParams: string;
	commandMetadata: OnTapCommandCommandMetadata;
	browseEndpoint: ChannelNavigationEndpointBrowseEndpoint;
}

export interface ChannelNavigationEndpointBrowseEndpoint {
	browseId: string;
	canonicalBaseUrl: string;
}

export interface DismissStrategy {
	type: string;
}

export interface Byline {
	runs: BylineRun[];
}

export interface BylineRun {
	text: string;
	navigationEndpoint: ChannelNavigationEndpointClass;
}

export interface ShowMoreCommandClass {
	clickTrackingParams: string;
	commandExecutorCommand: ShowMoreCommandCommandExecutorCommand;
}

export interface ShowMoreCommandCommandExecutorCommand {
	commands: OnShowCommandElement[];
}

export interface OnShowCommandElement {
	clickTrackingParams: string;
	changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction;
	scrollToEngagementPanelCommand?: ScrollToEngagementPanelCommandClass;
}

export interface ScrollToEngagementPanelCommandClass {
	targetId: string;
}

export interface SubscribeButton {
	subscribeButtonRenderer: PurpleSubscribeButtonRenderer;
}

export interface PurpleSubscribeButtonRenderer {
	buttonText: DetailsText;
	subscribed: boolean;
	enabled: boolean;
	type: string;
	channelId: string;
	showPreferences: boolean;
	subscribedButtonText: DetailsText;
	unsubscribedButtonText: DetailsText;
	trackingParams: string;
	unsubscribeButtonText: DetailsText;
	subscribeAccessibility: DisabledAccessibilityData;
	unsubscribeAccessibility: DisabledAccessibilityData;
	notificationPreferenceButton: NotificationPreferenceButton;
	targetId: string;
	signInEndpoint: IndigoSignInEndpoint;
	subscribedEntityKey: string;
	onSubscribeEndpoints: SubscribeCommand[];
	onUnsubscribeEndpoints: OnUnsubscribeEndpoint[];
}

export interface NotificationPreferenceButton {
	subscriptionNotificationToggleButtonRenderer: SubscriptionNotificationToggleButtonRenderer;
}

export interface SubscriptionNotificationToggleButtonRenderer {
	states: StateElement[];
	currentStateId: number;
	trackingParams: string;
	command: SubscriptionNotificationToggleButtonRendererCommand;
	targetId: string;
	secondaryIcon: IconImageClass;
}

export interface SubscriptionNotificationToggleButtonRendererCommand {
	clickTrackingParams: string;
	commandExecutorCommand: TentacledCommandExecutorCommand;
}

export interface TentacledCommandExecutorCommand {
	commands: MagentaCommand[];
}

export interface MagentaCommand {
	clickTrackingParams: string;
	openPopupAction: TentacledOpenPopupAction;
}

export interface TentacledOpenPopupAction {
	popup: IndigoPopup;
	popupType: string;
}

export interface IndigoPopup {
	menuPopupRenderer: FluffyMenuPopupRenderer;
}

export interface FluffyMenuPopupRenderer {
	items: TentacledItem[];
}

export interface TentacledItem {
	menuServiceItemRenderer: FluffyMenuServiceItemRenderer;
}

export interface FluffyMenuServiceItemRenderer {
	text: MenuServiceItemRendererText;
	icon: IconImageClass;
	serviceEndpoint: FluffyServiceEndpoint;
	trackingParams: string;
	isSelected?: boolean;
}

export interface FluffyServiceEndpoint {
	clickTrackingParams: string;
	commandMetadata: UntoggledServiceEndpointCommandMetadata;
	modifyChannelNotificationPreferenceEndpoint?: GetTranscriptEndpointClass;
	signalServiceEndpoint?: OnUnsubscribeEndpointSignalServiceEndpoint;
}

export interface MenuServiceItemRendererText {
	simpleText?: string;
	runs?: DetailsTextRun[];
}

export interface StateElement {
	stateId: number;
	nextStateId: number;
	state: StateState;
}

export interface StateState {
	buttonRenderer: StateButtonRenderer;
}

export interface StateButtonRenderer {
	style: string;
	size: string;
	isDisabled: boolean;
	icon: IconImageClass;
	accessibility: AccessibilityData;
	trackingParams: string;
	accessibilityData: DisabledAccessibilityData;
}

export interface OnUnsubscribeEndpoint {
	clickTrackingParams: string;
	commandMetadata: OnUnsubscribeEndpointCommandMetadata;
	signalServiceEndpoint: OnUnsubscribeEndpointSignalServiceEndpoint;
}

export interface OnUnsubscribeEndpointCommandMetadata {
	webCommandMetadata: MagentaWebCommandMetadata;
}

export interface MagentaWebCommandMetadata {
	sendPost: boolean;
}

export interface IndigoSignInEndpoint {
	clickTrackingParams: string;
	commandMetadata: IndecentCommandMetadata;
	modalEndpoint: SignInEndpointModalEndpoint;
}

export interface SignInEndpointModalEndpoint {
	modal: IndigoModal;
}

export interface IndigoModal {
	modalWithTitleAndButtonRenderer: IndigoModalWithTitleAndButtonRenderer;
}

export interface IndigoModalWithTitleAndButtonRenderer {
	title: HeaderText;
	content: HeaderText;
	button: IndigoButton;
}

export interface IndigoButton {
	buttonRenderer: CunningButtonRenderer;
}

export interface CunningButtonRenderer {
	style: string;
	size: string;
	isDisabled: boolean;
	text: HeaderText;
	navigationEndpoint: IndigoNavigationEndpoint;
	trackingParams: string;
}

export interface IndigoNavigationEndpoint {
	clickTrackingParams: string;
	commandMetadata: StickyCommandMetadata;
	signInEndpoint: IndecentSignInEndpoint;
}

export interface IndecentSignInEndpoint {
	nextEndpoint: CurrentVideoEndpointClass;
	continueAction: string;
	idamTag: string;
}

export interface TwoColumnWatchNextResultsSecondaryResults {
	secondaryResults: SecondaryResultsSecondaryResults;
}

export interface SecondaryResultsSecondaryResults {
	results: SecondaryResultsResult[];
	trackingParams: string;
	targetId: string;
}

export interface SecondaryResultsResult {
	compactVideoRenderer?: CompactVideoRenderer;
	continuationItemRenderer?: ResultContinuationItemRenderer;
}

export interface CompactVideoRenderer {
	videoId: string;
	thumbnail: WatermarkClass;
	title: ShortViewCountText;
	longBylineText: Byline;
	publishedTimeText: HeaderText;
	viewCountText: HeaderText;
	lengthText: ShortViewCountText;
	navigationEndpoint: CompactVideoRendererNavigationEndpoint;
	shortBylineText: Byline;
	badges?: PurpleBadge[];
	channelThumbnail: ChannelThumbnailClass;
	ownerBadges?: OwnerBadgeElement[];
	trackingParams: string;
	shortViewCountText: ShortViewCountText;
	menu: CompactVideoRendererMenu;
	thumbnailOverlays: CompactVideoRendererThumbnailOverlay[];
	accessibility: DisabledAccessibilityData;
	richThumbnail: RichThumbnail;
}

export interface PurpleBadge {
	metadataBadgeRenderer: PurpleMetadataBadgeRenderer;
}

export interface PurpleMetadataBadgeRenderer {
	style: string;
	label: string;
	trackingParams: string;
}

export interface CompactVideoRendererMenu {
	menuRenderer: PurpleMenuRenderer;
}

export interface PurpleMenuRenderer {
	items: StickyItem[];
	trackingParams: string;
	accessibility: DisabledAccessibilityData;
	targetId?: string;
}

export interface StickyItem {
	menuServiceItemRenderer?: TentacledMenuServiceItemRenderer;
	menuServiceItemDownloadRenderer?: ItemMenuServiceItemDownloadRenderer;
}

export interface ItemMenuServiceItemDownloadRenderer {
	serviceEndpoint: TentacledServiceEndpoint;
	trackingParams: string;
}

export interface TentacledServiceEndpoint {
	clickTrackingParams: string;
	offlineVideoEndpoint: PurpleOfflineVideoEndpoint;
}

export interface PurpleOfflineVideoEndpoint {
	videoId: string;
	onAddCommand: FluffyOnAddCommand;
}

export interface FluffyOnAddCommand {
	clickTrackingParams: string;
	getDownloadActionCommand: FluffyGetDownloadActionCommand;
}

export interface FluffyGetDownloadActionCommand {
	videoId: string;
	params: string;
}

export interface TentacledMenuServiceItemRenderer {
	text: DetailsText;
	icon: IconImageClass;
	serviceEndpoint: StickyServiceEndpoint;
	trackingParams: string;
	hasSeparator?: boolean;
}

export interface StickyServiceEndpoint {
	clickTrackingParams: string;
	commandMetadata: UntoggledServiceEndpointCommandMetadata;
	signalServiceEndpoint?: PurpleSignalServiceEndpoint;
	shareEntityServiceEndpoint?: ShareEntityServiceEndpoint;
}

export interface PurpleSignalServiceEndpoint {
	signal: string;
	actions: StickyAction[];
}

export interface StickyAction {
	clickTrackingParams: string;
	addToPlaylistCommand?: AddToPlaylistCommand;
	openPopupAction?: StickyOpenPopupAction;
}

export interface AddToPlaylistCommand {
	openMiniplayer: boolean;
	openListPanel: boolean;
	videoId: string;
	listType: string;
	onCreateListCommand: OnCreateListCommand;
	videoIds: string[];
}

export interface OnCreateListCommand {
	clickTrackingParams: string;
	commandMetadata: UnsubscribeCommandCommandMetadata;
	createPlaylistServiceEndpoint: CreatePlaylistServiceEndpoint;
}

export interface CreatePlaylistServiceEndpoint {
	videoIds: string[];
	params: string;
}

export interface StickyOpenPopupAction {
	popup: IndecentPopup;
	popupType: string;
}

export interface IndecentPopup {
	notificationActionRenderer: PurpleNotificationActionRenderer;
}

export interface PurpleNotificationActionRenderer {
	responseText: HeaderText;
	trackingParams: string;
}

export interface CompactVideoRendererNavigationEndpoint {
	clickTrackingParams: string;
	commandMetadata: AutoplayVideoCommandMetadata;
	watchEndpoint: PurpleWatchEndpoint;
}

export interface PurpleWatchEndpoint {
	videoId: string;
	nofollow: boolean;
	watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig;
}

export interface RichThumbnail {
	movingThumbnailRenderer: MovingThumbnailRenderer;
}

export interface MovingThumbnailRenderer {
	movingThumbnailDetails: MovingThumbnailDetails;
	enableHoveredLogging: boolean;
	enableOverlay: boolean;
}

export interface MovingThumbnailDetails {
	thumbnails: RichThumbnailElement[];
	logAsMovingThumbnail: boolean;
}

export interface CompactVideoRendererThumbnailOverlay {
	thumbnailOverlayTimeStatusRenderer?: ThumbnailOverlayTimeStatusRenderer;
	thumbnailOverlayToggleButtonRenderer?: ThumbnailOverlayToggleButtonRenderer;
	thumbnailOverlayNowPlayingRenderer?: ThumbnailOverlayNowPlayingRenderer;
}

export interface ThumbnailOverlayNowPlayingRenderer {
	text: DetailsText;
}

export interface ThumbnailOverlayToggleButtonRenderer {
	isToggled?: boolean;
	untoggledIcon: IconImageClass;
	toggledIcon: IconImageClass;
	untoggledTooltip: string;
	toggledTooltip: string;
	untoggledServiceEndpoint: UntoggledServiceEndpoint;
	toggledServiceEndpoint?: RemoveFromWatchLaterCommand;
	untoggledAccessibility: DisabledAccessibilityData;
	toggledAccessibility: DisabledAccessibilityData;
	trackingParams: string;
}

export interface UntoggledServiceEndpoint {
	clickTrackingParams: string;
	commandMetadata: UntoggledServiceEndpointCommandMetadata;
	playlistEditEndpoint?: AddToWatchLaterCommandPlaylistEditEndpoint;
	signalServiceEndpoint?: UntoggledServiceEndpointSignalServiceEndpoint;
}

export interface UntoggledServiceEndpointSignalServiceEndpoint {
	signal: string;
	actions: IndigoAction[];
}

export interface IndigoAction {
	clickTrackingParams: string;
	addToPlaylistCommand: AddToPlaylistCommand;
}

export interface ResultContinuationItemRenderer {
	trigger: string;
	continuationEndpoint: ContinuationEndpoint;
	button: ContinuationItemRendererButton;
}

export interface ContinuationItemRendererButton {
	buttonRenderer: MagentaButtonRenderer;
}

export interface MagentaButtonRenderer {
	style: string;
	size: string;
	isDisabled: boolean;
	text: DetailsText;
	trackingParams: string;
	command: ContinuationEndpoint;
}

export interface EngagementPanel {
	engagementPanelSectionListRenderer: EngagementPanelSectionListRenderer;
}

export interface EngagementPanelSectionListRenderer {
	panelIdentifier?: string;
	header?: EngagementPanelSectionListRendererHeader;
	content: EngagementPanelSectionListRendererContent;
	veType?: number;
	targetId: string;
	visibility: string;
	loggingDirectives: EngagementPanelSectionListRendererLoggingDirectives;
	onShowCommands?: OnShowCommandElement[];
}

export interface EngagementPanelSectionListRendererContent {
	sectionListRenderer?: SectionListRenderer;
	adsEngagementPanelContentRenderer?: AdsEngagementPanelContentRenderer;
	macroMarkersListRenderer?: MacroMarkersListRenderer;
	productListRenderer?: ProductListRenderer;
	structuredDescriptionContentRenderer?: StructuredDescriptionContentRenderer;
	continuationItemRenderer?: FluffyContinuationItemRenderer;
}

export interface FluffyContinuationItemRenderer {
	trigger: string;
	continuationEndpoint: PurpleContinuationEndpoint;
}

export interface PurpleContinuationEndpoint {
	clickTrackingParams: string;
	commandMetadata: UnsubscribeCommandCommandMetadata;
	getTranscriptEndpoint: GetTranscriptEndpointClass;
}

export interface MacroMarkersListRenderer {
	contents: MacroMarkersListRendererContent[];
	syncButtonLabel: DetailsText;
	trackingParams: string;
}

export interface MacroMarkersListRendererContent {
	macroMarkersListItemRenderer: ContentMacroMarkersListItemRenderer;
}

export interface ContentMacroMarkersListItemRenderer {
	title: HeaderText;
	timeDescription: HeaderText;
	thumbnail: WatermarkClass;
	onTap: MacroMarkersListItemRendererOnTap;
	trackingParams: string;
	shareButton: MacroMarkersListItemRendererShareButton;
	repeatButton: RepeatButton;
	macroMarkerRepeatStateEntityKey: string;
	endRepeatCommand: EndRepeatCommand;
	playerStateEntityKey: string;
	carouselType: string;
	timeDescriptionA11yLabel: string;
}

export interface EndRepeatCommand {
	clickTrackingParams: string;
	commandExecutorCommand: EndRepeatCommandCommandExecutorCommand;
}

export interface EndRepeatCommandCommandExecutorCommand {
	commands: FriskyCommand[];
}

export interface FriskyCommand {
	clickTrackingParams: string;
	entityUpdateCommand?: EntityUpdateCommand;
	repeatChapterCommand?: CommandRepeatChapterCommand;
}

export interface EntityUpdateCommand {
	entityBatchUpdate: EntityUpdateCommandEntityBatchUpdate;
}

export interface EntityUpdateCommandEntityBatchUpdate {
	mutations: FluffyMutation[];
}

export interface FluffyMutation {
	entityKey: string;
	type: string;
}

export interface CommandRepeatChapterCommand {
	repeat: string;
}

export interface MacroMarkersListItemRendererOnTap {
	clickTrackingParams: string;
	commandMetadata: AutoplayVideoCommandMetadata;
	watchEndpoint: InnertubeCommandWatchEndpoint;
}

export interface RepeatButton {
	toggleButtonRenderer: ToggleButtonRenderer;
}

export interface ToggleButtonRenderer {
	style: Style;
	isToggled: boolean;
	isDisabled: boolean;
	defaultIcon: IconImageClass;
	defaultServiceEndpoint: DefaultServiceEndpoint;
	toggledServiceEndpoint: EndRepeatCommand;
	trackingParams: string;
	toggledStyle: Style;
	accessibilityData: DisabledAccessibilityData;
	toggledAccessibilityData: DisabledAccessibilityData;
}

export interface DefaultServiceEndpoint {
	clickTrackingParams: string;
	repeatChapterCommand: DefaultServiceEndpointRepeatChapterCommand;
}

export interface DefaultServiceEndpointRepeatChapterCommand {
	repeat: string;
	startTimeMs: string;
	endTimeMs: string;
	repeatStateEntityKey: string;
}

export interface Style {
	styleType: string;
}

export interface MacroMarkersListItemRendererShareButton {
	buttonRenderer: FriskyButtonRenderer;
}

export interface FriskyButtonRenderer {
	style: string;
	icon: IconImageClass;
	trackingParams: string;
	accessibilityData: DisabledAccessibilityData;
	command: CommandClass;
}

export interface ProductListRenderer {
	contents: ProductListRendererContent[];
	trackingParams: string;
}

export interface ProductListRendererContent {
	productListHeaderRenderer?: ProductListHeaderRenderer;
	productListItemRenderer?: ContentProductListItemRenderer;
}

export interface ProductListHeaderRenderer {
	title: TitleFormattedClass;
	trackingParams: string;
	suppressPaddingDisclaimer: boolean;
}

export interface ContentProductListItemRenderer {
	title: HeaderText;
	accessibilityTitle: string;
	thumbnail: ChannelThumbnailClass;
	price: string;
	onClickCommand: ButtonCommandClass;
	trackingParams: string;
	merchantName: string;
	stayInApp: boolean;
	viewButton: PurpleViewButton;
	loggingDirectives: MenuServiceItemRendererLoggingDirectives;
}

export interface PurpleViewButton {
	buttonRenderer: MischievousButtonRenderer;
}

export interface MischievousButtonRenderer {
	style: string;
	size: string;
	text: HeaderText;
	icon: IconImageClass;
	trackingParams: string;
	iconPosition: string;
}

export interface SectionListRenderer {
	contents: SectionListRendererContent[];
	trackingParams: string;
}

export interface SectionListRendererContent {
	itemSectionRenderer: ItemSectionRenderer;
}

export interface StructuredDescriptionContentRenderer {
	items: StructuredDescriptionContentRendererItem[];
}

export interface StructuredDescriptionContentRendererItem {
	videoDescriptionHeaderRenderer?: VideoDescriptionHeaderRenderer;
	merchandiseShelfRenderer?: MerchandiseShelfRenderer;
	expandableVideoDescriptionBodyRenderer?: ExpandableVideoDescriptionBodyRenderer;
	horizontalCardListRenderer?: HorizontalCardListRenderer;
	videoDescriptionTranscriptSectionRenderer?: VideoDescriptionTranscriptSectionRenderer;
	videoDescriptionInfocardsSectionRenderer?: VideoDescriptionInfocardsSectionRenderer;
}

export interface ExpandableVideoDescriptionBodyRenderer {
	showMoreText: ShortViewCountText;
	showLessText: HeaderText;
	attributedDescriptionBodyText: AttributedDescription;
	headerRuns: HeaderRun[];
}

export interface HorizontalCardListRenderer {
	cards: HorizontalCardListRendererCard[];
	trackingParams: string;
	header: HorizontalCardListRendererHeader;
	style: DismissStrategy;
	centerItems: boolean;
}

export interface HorizontalCardListRendererCard {
	macroMarkersListItemRenderer: CardMacroMarkersListItemRenderer;
}

export interface CardMacroMarkersListItemRenderer {
	title: HeaderText;
	timeDescription: HeaderText;
	thumbnail: WatermarkClass;
	onTap: MacroMarkersListItemRendererOnTap;
	trackingParams: string;
	layout: string;
	carouselType: string;
}

export interface HorizontalCardListRendererHeader {
	richListHeaderRenderer: RichListHeaderRenderer;
}

export interface RichListHeaderRenderer {
	title: HeaderText;
	trackingParams: string;
	navigationButton: RichListHeaderRendererNavigationButton;
}

export interface RichListHeaderRendererNavigationButton {
	buttonRenderer: BraggadociousButtonRenderer;
}

export interface BraggadociousButtonRenderer {
	style: string;
	text: HeaderText;
	trackingParams: string;
	command: MischievousCommand;
}

export interface MischievousCommand {
	clickTrackingParams: string;
	commandExecutorCommand: StickyCommandExecutorCommand;
}

export interface StickyCommandExecutorCommand {
	commands: BraggadociousCommand[];
}

export interface BraggadociousCommand {
	clickTrackingParams: string;
	changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction;
	scrollToEngagementPanelCommand?: ScrollToEngagementPanelCommandClass;
	engagementPanelHeaderShowNavigationButtonCommand?: EngagementPanelHeaderShowNavigationButtonCommand;
}

export interface EngagementPanelHeaderShowNavigationButtonCommand {
	targetId: string;
	navigationButton: EngagementPanelHeaderShowNavigationButtonCommandNavigationButton;
}

export interface EngagementPanelHeaderShowNavigationButtonCommandNavigationButton {
	buttonRenderer: ButtonRenderer1;
}

export interface ButtonRenderer1 {
	icon: IconImageClass;
	accessibility: AccessibilityData;
	trackingParams: string;
	accessibilityData: DisabledAccessibilityData;
	command: Command1;
}

export interface Command1 {
	clickTrackingParams: string;
	commandExecutorCommand: IndigoCommandExecutorCommand;
}

export interface IndigoCommandExecutorCommand {
	commands: OnTapCommandElement[];
}

export interface VideoDescriptionHeaderRenderer {
	title: DetailsText;
	channel: HeaderText;
	views: HeaderText;
	publishDate: HeaderText;
	factoid: FactoidElement[];
	channelNavigationEndpoint: ChannelNavigationEndpointClass;
	channelThumbnail: Channel;
}

export interface Channel {
	thumbnails: CommonConfig[];
}

export interface FactoidElement {
	factoidRenderer?: FactoidRenderer;
	viewCountFactoidRenderer?: ViewCountFactoidRenderer;
}

export interface FactoidRenderer {
	value: HeaderText;
	label: HeaderText;
	accessibilityText: string;
}

export interface ViewCountFactoidRenderer {
	viewCountEntityKey: string;
	factoid: ViewCountFactoidRendererFactoid;
	viewCountType: string;
}

export interface ViewCountFactoidRendererFactoid {
	factoidRenderer: FactoidRenderer;
}

export interface VideoDescriptionInfocardsSectionRenderer {
	sectionTitle: HeaderText;
	creatorVideosButton: CreatorButton;
	creatorAboutButton: CreatorButton;
	sectionSubtitle: ShortViewCountText;
	channelAvatar: Channel;
	channelEndpoint: ChannelNavigationEndpointClass;
	creatorCustomUrlButtons: CreatorCustomURLButton[];
	trackingParams: string;
}

export interface CreatorButton {
	buttonRenderer: CreatorAboutButtonButtonRenderer;
}

export interface CreatorAboutButtonButtonRenderer {
	style: string;
	size: string;
	isDisabled: boolean;
	text: HeaderText;
	icon: IconImageClass;
	trackingParams: string;
	command: Command2;
}

export interface Command2 {
	clickTrackingParams: string;
	commandMetadata: OnTapCommandCommandMetadata;
	browseEndpoint: CommandBrowseEndpoint;
}

export interface CommandBrowseEndpoint {
	browseId: string;
	params: string;
}

export interface CreatorCustomURLButton {
	buttonViewModel: CreatorCustomURLButtonButtonViewModel;
}

export interface CreatorCustomURLButtonButtonViewModel {
	title: string;
	onTap: IndecentOnTap;
	style: string;
	trackingParams: string;
	type: string;
	buttonSize: string;
	iconImage: IconImageElement;
}

export interface IndecentOnTap {
	innertubeCommand: VideoQualityPromoRendererEndpoint;
}

export interface VideoDescriptionTranscriptSectionRenderer {
	sectionTitle: DetailsText;
	subHeaderText: DetailsText;
	primaryButton: PrimaryButton;
	trackingParams: string;
}

export interface PrimaryButton {
	buttonRenderer: PrimaryButtonButtonRenderer;
}

export interface PrimaryButtonButtonRenderer {
	style: string;
	size: string;
	isDisabled: boolean;
	text: DetailsText;
	trackingParams: string;
	command: Command3;
}

export interface Command3 {
	clickTrackingParams: string;
	commandExecutorCommand: IndecentCommandExecutorCommand;
}

export interface IndecentCommandExecutorCommand {
	commands: Command4[];
}

export interface Command4 {
	clickTrackingParams: string;
	showEngagementPanelEndpoint?: ShowEngagementPanelEndpoint;
	scrollToEngagementPanelCommand?: ScrollToEngagementPanelCommandClass;
}

export interface ShowEngagementPanelEndpoint {
	panelIdentifier: string;
	sourcePanelIdentifier: string;
}

export interface EngagementPanelSectionListRendererHeader {
	engagementPanelTitleHeaderRenderer: EngagementPanelTitleHeaderRenderer;
}

export interface EngagementPanelTitleHeaderRenderer {
	title: EngagementPanelTitleHeaderRendererTitle;
	contextualInfo?: DetailsText;
	menu?: EngagementPanelTitleHeaderRendererMenu;
	visibilityButton: VisibilityButton;
	trackingParams: string;
	subtitle?: Media;
}

export interface EngagementPanelTitleHeaderRendererMenu {
	sortFilterSubMenuRenderer?: SortFilterSubMenuRenderer;
	menuRenderer?: FluffyMenuRenderer;
}

export interface FluffyMenuRenderer {
	items: IndigoItem[];
	trackingParams: string;
	accessibility: DisabledAccessibilityData;
}

export interface IndigoItem {
	menuServiceItemRenderer: StickyMenuServiceItemRenderer;
}

export interface StickyMenuServiceItemRenderer {
	text: DetailsText;
	serviceEndpoint: ServiceEndpointClass;
	trackingParams: string;
}

export interface ServiceEndpointClass {
	clickTrackingParams: string;
	commandMetadata: OnUnsubscribeEndpointCommandMetadata;
	signalServiceEndpoint: CommandSignalServiceEndpoint;
}

export interface CommandSignalServiceEndpoint {
	signal: string;
	actions: IndecentAction[];
}

export interface IndecentAction {
	clickTrackingParams: string;
	signalAction: SignalAction;
}

export interface SignalAction {
	signal: string;
}

export interface SortFilterSubMenuRenderer {
	subMenuItems: SubMenuItem[];
	icon: IconImageClass;
	accessibility: DisabledAccessibilityData;
	trackingParams: string;
}

export interface SubMenuItem {
	title: string;
	selected: boolean;
	serviceEndpoint: SubMenuItemServiceEndpoint;
	trackingParams: string;
}

export interface SubMenuItemServiceEndpoint {
	clickTrackingParams: string;
	commandMetadata: UnsubscribeCommandCommandMetadata;
	continuationCommand: ServiceEndpointContinuationCommand;
}

export interface ServiceEndpointContinuationCommand {
	token: string;
	request: string;
	command: ContinuationCommandCommand;
}

export interface ContinuationCommandCommand {
	clickTrackingParams: string;
	showReloadUiCommand: ScrollToEngagementPanelCommandClass;
}

export interface EngagementPanelTitleHeaderRendererTitle {
	runs?: DetailsTextRun[];
	accessibility?: DisabledAccessibilityData;
	simpleText?: string;
}

export interface VisibilityButton {
	buttonRenderer: VisibilityButtonButtonRenderer;
}

export interface VisibilityButtonButtonRenderer {
	style?: string;
	size?: string;
	icon: IconImageClass;
	trackingParams: string;
	accessibilityData?: DisabledAccessibilityData;
	command: Command5;
	accessibility?: AccessibilityData;
	isDisabled?: boolean;
}

export interface Command5 {
	clickTrackingParams: string;
	hideEngagementPanelEndpoint?: EngagementPanelEndpoint;
	changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction;
	commandExecutorCommand?: HilariousCommandExecutorCommand;
}

export interface HilariousCommandExecutorCommand {
	commands: Command6[];
}

export interface Command6 {
	clickTrackingParams: string;
	changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction;
	updateToggleButtonStateCommand?: UpdateToggleButtonStateCommand;
}

export interface UpdateToggleButtonStateCommand {
	toggled: boolean;
	buttonId: string;
}

export interface EngagementPanelEndpoint {
	panelIdentifier: string;
}

export interface EngagementPanelSectionListRendererLoggingDirectives {
	trackingParams: string;
	visibility: Visibility;
}

export interface ResponseFrameworkUpdates {
	entityBatchUpdate: FluffyEntityBatchUpdate;
}

export interface FluffyEntityBatchUpdate {
	mutations: TentacledMutation[];
	timestamp: Timestamp;
}

export interface TentacledMutation {
	entityKey: string;
	type: string;
	payload?: FluffyPayload;
}

export interface FluffyPayload {
	logoEntity?: LogoEntity;
	likeStatusEntity?: LikeStatusEntity;
	subscriptionStateEntity?: SubscriptionStateEntity;
}

export interface LogoEntity {
	key: string;
	lightThemeLogo: ThemeLogo;
	darkThemeLogo: ThemeLogo;
	onTapCommand: EndpointClass;
	tooltipText: DetailsText;
	promoId: string;
	loggingDirectives: EngagementPanelSectionListRendererLoggingDirectives;
}

export interface ThemeLogo {
	thumbnail: DarkThemeLogoThumbnail;
}

export interface DarkThemeLogoThumbnail {
	thumbnails: RichThumbnailElement[];
}

export interface SubscriptionStateEntity {
	key: string;
	subscribed: boolean;
}

export interface OnResponseReceivedEndpoint {
	clickTrackingParams: string;
	commandMetadata?: OnUnsubscribeEndpointCommandMetadata;
	signalServiceEndpoint?: CommandSignalServiceEndpoint;
	loadMarkersCommand?: LoadMarkersCommand;
}

export interface LoadMarkersCommand {
	entityKeys: string[];
}

export interface Overlay {
	tooltipRenderer: TooltipRenderer;
}

export interface TooltipRenderer {
	promoConfig: PromoConfig;
	targetId: string;
	detailsText: DetailsText;
	suggestedPosition: DismissStrategy;
	dismissStrategy: DismissStrategy;
	dwellTimeMs: string;
	trackingParams: string;
}

export interface PromoConfig {
	promoId: string;
	impressionEndpoints: AcceptCommand[];
	acceptCommand: AcceptCommand;
	dismissCommand: AcceptCommand;
}

export interface PageVisualEffect {
	cinematicContainerRenderer: CinematicContainerRenderer;
}

export interface CinematicContainerRenderer {
	presentationStyle: string;
	config: CinematicContainerRendererConfig;
	colorStore: ColorStore;
}

export interface ColorStore {
	sampledColors: SampledColor[];
}

export interface CinematicContainerRendererConfig {
	lightThemeBackgroundColor: number;
	darkThemeBackgroundColor: number;
	animationConfig: AnimationConfig;
	colorSourceSizeMultiplier: number;
	applyClientImageBlur: boolean;
	bottomColorSourceHeightMultiplier: number;
	maxBottomColorSourceHeight: number;
	colorSourceWidthMultiplier: number;
	colorSourceHeightMultiplier: number;
	blurStrength: number;
	watchFullscreenConfig: WatchFullscreenConfig;
	enableInLightTheme: boolean;
}

export interface AnimationConfig {
	minImageUpdateIntervalMs: number;
	crossfadeDurationMs: number;
	crossfadeStartOffset: number;
	maxFrameRate: number;
}

export interface WatchFullscreenConfig {
	colorSourceWidthMultiplier: number;
	colorSourceHeightMultiplier: number;
	scrimWidthMultiplier: number;
	scrimHeightMultiplier: number;
	scrimGradientConfig: ScrimGradientConfig;
}

export interface ScrimGradientConfig {
	gradientType: string;
	gradientStartPointX: number;
	gradientStartPointY: number;
	gradientEndPointX: number;
	gradientEndPointY: number;
}

export interface PlayerOverlays {
	playerOverlayRenderer: PlayerOverlayRenderer;
}

export interface PlayerOverlayRenderer {
	endScreen: EndScreen;
	autoplay: PlayerOverlayRendererAutoplay;
	shareButton: PlayerOverlayRendererShareButton;
	addToMenu: AddToMenu;
	videoDetails: PlayerOverlayRendererVideoDetails;
	autonavToggle: AutonavToggle;
	decoratedPlayerBarRenderer: PlayerOverlayRendererDecoratedPlayerBarRenderer;
	productsInVideoOverlayRenderer: ProductsInVideoOverlayRenderer;
	speedmasterUserEdu: SpeedmasterUserEdu;
}

export interface AddToMenu {
	menuRenderer: InfoCardIconRenderer;
}

export interface AutonavToggle {
	autoplaySwitchButtonRenderer: AutoplaySwitchButtonRenderer;
}

export interface AutoplaySwitchButtonRenderer {
	onEnabledCommand: OnAbledCommand;
	onDisabledCommand: OnAbledCommand;
	enabledAccessibilityData: DisabledAccessibilityData;
	disabledAccessibilityData: DisabledAccessibilityData;
	trackingParams: string;
	enabled: boolean;
}

export interface OnAbledCommand {
	clickTrackingParams: string;
	commandMetadata: UnsubscribeCommandCommandMetadata;
	setSettingEndpoint: SetSettingEndpoint;
}

export interface SetSettingEndpoint {
	settingItemId: string;
	boolValue: boolean;
	settingItemIdForClient: string;
}

export interface PlayerOverlayRendererAutoplay {
	playerOverlayAutoplayRenderer: PlayerOverlayAutoplayRenderer;
}

export interface PlayerOverlayAutoplayRenderer {
	title: HeaderText;
	videoTitle: ShortViewCountText;
	byline: Byline;
	pauseText: HeaderText;
	background: WatermarkClass;
	countDownSecs: number;
	cancelButton: PlayerOverlayAutoplayRendererCancelButton;
	nextButton: NextButton;
	trackingParams: string;
	closeButton: PlayerOverlayAutoplayRendererCloseButton;
	thumbnailOverlays: EndscreenElementRendererThumbnailOverlay[];
	preferImmediateRedirect: boolean;
	videoId: string;
	publishedTimeText: HeaderText;
	webShowNewAutonavCountdown: boolean;
	webShowBigThumbnailEndscreen: boolean;
	shortViewCountText: ShortViewCountText;
	countDownSecsForFullscreen: number;
}

export interface PlayerOverlayAutoplayRendererCancelButton {
	buttonRenderer: ButtonRenderer2;
}

export interface ButtonRenderer2 {
	style: string;
	size: string;
	isDisabled: boolean;
	text: HeaderText;
	accessibility: AccessibilityData;
	trackingParams: string;
	accessibilityData: DisabledAccessibilityData;
	command: Command7;
}

export interface Command7 {
	clickTrackingParams: string;
	commandMetadata: UnsubscribeCommandCommandMetadata;
	getSurveyCommand: GetSurveyCommand;
}

export interface GetSurveyCommand {
	endpoint: GetSurveyCommandEndpoint;
	action: string;
}

export interface GetSurveyCommandEndpoint {
	watch: AdsEngagementPanelContentRenderer;
}

export interface PlayerOverlayAutoplayRendererCloseButton {
	buttonRenderer: CloseButtonButtonRenderer;
}

export interface CloseButtonButtonRenderer {
	style: string;
	size: string;
	isDisabled: boolean;
	icon: IconImageClass;
	accessibility: AccessibilityData;
	trackingParams: string;
}

export interface NextButton {
	buttonRenderer: NextButtonButtonRenderer;
}

export interface NextButtonButtonRenderer {
	style: string;
	size: string;
	isDisabled: boolean;
	navigationEndpoint: CurrentVideoEndpointClass;
	accessibility: AccessibilityData;
	trackingParams: string;
	accessibilityData: DisabledAccessibilityData;
}

export interface PlayerOverlayRendererDecoratedPlayerBarRenderer {
	decoratedPlayerBarRenderer: DecoratedPlayerBarRendererDecoratedPlayerBarRenderer;
}

export interface DecoratedPlayerBarRendererDecoratedPlayerBarRenderer {
	playerBar: PlayerBar;
	playerBarActionButton: PlayerBarActionButton;
}

export interface PlayerBar {
	multiMarkersPlayerBarRenderer: MultiMarkersPlayerBarRenderer;
}

export interface MultiMarkersPlayerBarRenderer {
	visibleOnLoad: VisibleOnLoad;
	markersMap: MarkersMap[];
	trackingParams: string;
}

export interface MarkersMap {
	key: string;
	value: Value;
}

export interface Value {
	chapters: ValueChapter[];
	trackingParams: string;
	onChapterRepeat: OnChapterRepeat;
}

export interface ValueChapter {
	chapterRenderer: ChapterRenderer;
}

export interface ChapterRenderer {
	title: HeaderText;
	timeRangeStartMillis: number;
	onActiveCommand: OnActiveCommand;
	thumbnail: WatermarkClass;
}

export interface OnActiveCommand {
	clickTrackingParams: string;
	setActivePanelItemAction: SetActivePanelItemAction;
}

export interface SetActivePanelItemAction {
	panelTargetId: string;
	itemIndex: number;
}

export interface OnChapterRepeat {
	clickTrackingParams: string;
	openPopupAction: OnChapterRepeatOpenPopupAction;
}

export interface OnChapterRepeatOpenPopupAction {
	popup: HilariousPopup;
	popupType: string;
}

export interface HilariousPopup {
	notificationActionRenderer: FluffyNotificationActionRenderer;
}

export interface FluffyNotificationActionRenderer {
	responseText: DetailsText;
	actionButton: FluffyActionButton;
	trackingParams: string;
}

export interface FluffyActionButton {
	buttonRenderer: ButtonRenderer3;
}

export interface ButtonRenderer3 {
	style: string;
	text: DetailsText;
	trackingParams: string;
	command: Command8;
}

export interface Command8 {
	clickTrackingParams: string;
	repeatChapterCommand: CommandRepeatChapterCommand;
}

export interface PlayerBarActionButton {
	buttonRenderer: PlayerBarActionButtonButtonRenderer;
}

export interface PlayerBarActionButtonButtonRenderer {
	text: DetailsText;
	trackingParams: string;
	command: OnTapCommandElement;
}

export interface EndScreen {
	watchNextEndScreenRenderer: WatchNextEndScreenRenderer;
}

export interface WatchNextEndScreenRenderer {
	results: WatchNextEndScreenRendererResult[];
	title: HeaderText;
	trackingParams: string;
}

export interface WatchNextEndScreenRendererResult {
	endScreenVideoRenderer: EndScreenVideoRenderer;
}

export interface EndScreenVideoRenderer {
	videoId: string;
	thumbnail: WatermarkClass;
	title: ShortViewCountText;
	shortBylineText: Byline;
	lengthText: ShortViewCountText;
	lengthInSeconds: number;
	navigationEndpoint: CurrentVideoEndpointClass;
	trackingParams: string;
	shortViewCountText: ShortViewCountText;
	publishedTimeText: HeaderText;
	thumbnailOverlays: EndScreenVideoRendererThumbnailOverlay[];
}

export interface EndScreenVideoRendererThumbnailOverlay {
	thumbnailOverlayTimeStatusRenderer?: ThumbnailOverlayTimeStatusRenderer;
	thumbnailOverlayNowPlayingRenderer?: ThumbnailOverlayNowPlayingRenderer;
}

export interface ProductsInVideoOverlayRenderer {
	shoppingOverlayRenderer: ShoppingOverlayRenderer;
}

export interface ShoppingOverlayRenderer {
	text: HeaderText;
	onClickCommand: ShowMoreCommandClass;
	trackingParams: string;
	timing: Timing;
	dismissButton: ShoppingOverlayRendererDismissButton;
	badgeInteractionLogging: InfoCardIconRenderer;
	featuredProductsEntityKey: string;
	isContentForward: boolean;
	productsData: ProductsDatum[];
	trendingOfferEntityKey: string;
}

export interface ShoppingOverlayRendererDismissButton {
	trackingParams: string;
	a11yLabel: HeaderText;
}

export interface ProductsDatum {
	productListItemRenderer: ProductsDatumProductListItemRenderer;
}

export interface ProductsDatumProductListItemRenderer {
	title: HeaderText;
	accessibilityTitle: string;
	thumbnail: ChannelThumbnailClass;
	price: string;
	onClickCommand: OnClickCommand;
	trackingParams: string;
	merchantName: string;
	stayInApp: boolean;
	viewButton: FluffyViewButton;
	loggingDirectives: MenuServiceItemRendererLoggingDirectives;
}

export interface OnClickCommand {
	clickTrackingParams: string;
	showEngagementPanelEndpoint: EngagementPanelEndpoint;
}

export interface FluffyViewButton {
	buttonRenderer: ButtonRenderer4;
}

export interface ButtonRenderer4 {
	style: string;
	size: string;
	text: HeaderText;
	trackingParams: string;
}

export interface Timing {
	visible: Expanded;
	expanded: Expanded;
	userExpandedDurationSec: number;
	preview: Expanded;
}

export interface Expanded {
	startSec: number;
	endSec: number;
}

export interface PlayerOverlayRendererShareButton {
	buttonRenderer: ButtonRenderer5;
}

export interface ButtonRenderer5 {
	style: string;
	size: string;
	isDisabled: boolean;
	icon: IconImageClass;
	navigationEndpoint: CommandClass;
	tooltip: string;
	trackingParams: string;
}

export interface SpeedmasterUserEdu {
	speedmasterEduViewModel: SpeedmasterEduViewModel;
}

export interface SpeedmasterEduViewModel {
	bodyText: BodyText;
}

export interface BodyText {
	content: string;
}

export interface PlayerOverlayRendererVideoDetails {
	playerOverlayVideoDetailsRenderer: PlayerOverlayVideoDetailsRenderer;
}

export interface PlayerOverlayVideoDetailsRenderer {
	title: HeaderText;
	subtitle: DetailsText;
}

export interface ResponseResponseContext {
	serviceTrackingParams: ServiceTrackingParam[];
	mainAppWebResponseContext: MainAppWebResponseContext;
	webResponseContextExtensionData: FluffyWebResponseContextExtensionData;
}

export interface FluffyWebResponseContextExtensionData {
	ytConfigData: YtConfigData;
	webPrefetchData: WebPrefetchData;
	hasDecorated: boolean;
}

export interface WebPrefetchData {
	navigationEndpoints: NavigationEndpointElement[];
}

export interface YtConfigData {
	visitorData: string;
	rootVisualElementType: number;
}

export interface Topbar {
	desktopTopbarRenderer: DesktopTopbarRenderer;
}

export interface DesktopTopbarRenderer {
	logo: Logo;
	searchbox: Searchbox;
	trackingParams: string;
	topbarButtons: TopbarButton[];
	hotkeyDialog: HotkeyDialog;
	backButton: BackButtonClass;
	forwardButton: BackButtonClass;
	a11ySkipNavigationButton: A11YSkipNavigationButton;
	voiceSearchButton: VoiceSearchButton;
}

export interface A11YSkipNavigationButton {
	buttonRenderer: A11YSkipNavigationButtonButtonRenderer;
}

export interface A11YSkipNavigationButtonButtonRenderer {
	style: string;
	size: string;
	isDisabled: boolean;
	text: DetailsText;
	trackingParams: string;
	command: ServiceEndpointClass;
}

export interface BackButtonClass {
	buttonRenderer: BackButtonButtonRenderer;
}

export interface BackButtonButtonRenderer {
	trackingParams: string;
	command: ServiceEndpointClass;
}

export interface HotkeyDialog {
	hotkeyDialogRenderer: HotkeyDialogRenderer;
}

export interface HotkeyDialogRenderer {
	title: DetailsText;
	sections: Section[];
	dismissButton: HotkeyDialogRendererDismissButton;
	trackingParams: string;
}

export interface HotkeyDialogRendererDismissButton {
	buttonRenderer: ButtonRenderer6;
}

export interface ButtonRenderer6 {
	style: string;
	size: string;
	isDisabled: boolean;
	text: DetailsText;
	trackingParams: string;
}

export interface Section {
	hotkeyDialogSectionRenderer: HotkeyDialogSectionRenderer;
}

export interface HotkeyDialogSectionRenderer {
	title: DetailsText;
	options: Option[];
}

export interface Option {
	hotkeyDialogSectionOptionRenderer: HotkeyDialogSectionOptionRenderer;
}

export interface HotkeyDialogSectionOptionRenderer {
	label: DetailsText;
	hotkey: string;
	hotkeyAccessibilityLabel?: DisabledAccessibilityData;
}

export interface Logo {
	topbarLogoRenderer: TopbarLogoRenderer;
}

export interface TopbarLogoRenderer {
	iconImage: IconImageClass;
	tooltipText: DetailsText;
	endpoint: EndpointClass;
	trackingParams: string;
	overrideEntityKey: string;
}

export interface Searchbox {
	fusionSearchboxRenderer: FusionSearchboxRenderer;
}

export interface FusionSearchboxRenderer {
	icon: IconImageClass;
	placeholderText: DetailsText;
	config: FusionSearchboxRendererConfig;
	trackingParams: string;
	searchEndpoint: FusionSearchboxRendererSearchEndpoint;
	clearButton: ClearButtonClass;
}

export interface ClearButtonClass {
	buttonRenderer: ClearButtonButtonRenderer;
}

export interface ClearButtonButtonRenderer {
	style: string;
	size: string;
	isDisabled: boolean;
	icon: IconImageClass;
	trackingParams: string;
	accessibilityData: DisabledAccessibilityData;
}

export interface FusionSearchboxRendererConfig {
	webSearchboxConfig: WebSearchboxConfig;
}

export interface WebSearchboxConfig {
	requestLanguage: string;
	requestDomain: string;
	hasOnscreenKeyboard: boolean;
	focusSearchbox: boolean;
}

export interface FusionSearchboxRendererSearchEndpoint {
	clickTrackingParams: string;
	commandMetadata: AutoplayVideoCommandMetadata;
	searchEndpoint: SearchEndpointSearchEndpoint;
}

export interface SearchEndpointSearchEndpoint {
	query: string;
}

export interface TopbarButton {
	topbarMenuButtonRenderer?: TopbarMenuButtonRenderer;
	buttonRenderer?: TopbarButtonButtonRenderer;
}

export interface TopbarButtonButtonRenderer {
	style: string;
	size: string;
	text: DetailsText;
	icon: IconImageClass;
	navigationEndpoint: IndecentNavigationEndpoint;
	trackingParams: string;
	targetId: string;
}

export interface IndecentNavigationEndpoint {
	clickTrackingParams: string;
	commandMetadata: StickyCommandMetadata;
	signInEndpoint: HilariousSignInEndpoint;
}

export interface HilariousSignInEndpoint {
	idamTag: string;
}

export interface TopbarMenuButtonRenderer {
	icon: IconImageClass;
	menuRequest: MenuRequest;
	trackingParams: string;
	accessibility: DisabledAccessibilityData;
	tooltip: string;
	style: string;
}

export interface MenuRequest {
	clickTrackingParams: string;
	commandMetadata: UnsubscribeCommandCommandMetadata;
	signalServiceEndpoint: MenuRequestSignalServiceEndpoint;
}

export interface MenuRequestSignalServiceEndpoint {
	signal: string;
	actions: HilariousAction[];
}

export interface HilariousAction {
	clickTrackingParams: string;
	openPopupAction: IndigoOpenPopupAction;
}

export interface IndigoOpenPopupAction {
	popup: AmbitiousPopup;
	popupType: string;
	beReused: boolean;
}

export interface AmbitiousPopup {
	multiPageMenuRenderer: MultiPageMenuRenderer;
}

export interface MultiPageMenuRenderer {
	trackingParams: string;
	style: string;
	showLoadingSpinner: boolean;
}

export interface VoiceSearchButton {
	buttonRenderer: VoiceSearchButtonButtonRenderer;
}

export interface VoiceSearchButtonButtonRenderer {
	style: string;
	size: string;
	isDisabled: boolean;
	serviceEndpoint: ButtonRendererServiceEndpoint;
	icon: IconImageClass;
	tooltip: string;
	trackingParams: string;
	accessibilityData: DisabledAccessibilityData;
}

export interface ButtonRendererServiceEndpoint {
	clickTrackingParams: string;
	commandMetadata: OnUnsubscribeEndpointCommandMetadata;
	signalServiceEndpoint: FluffySignalServiceEndpoint;
}

export interface FluffySignalServiceEndpoint {
	signal: string;
	actions: AmbitiousAction[];
}

export interface AmbitiousAction {
	clickTrackingParams: string;
	openPopupAction: IndecentOpenPopupAction;
}

export interface IndecentOpenPopupAction {
	popup: CunningPopup;
	popupType: string;
}

export interface CunningPopup {
	voiceSearchDialogRenderer: VoiceSearchDialogRenderer;
}

export interface VoiceSearchDialogRenderer {
	placeholderHeader: DetailsText;
	promptHeader: DetailsText;
	exampleQuery1: DetailsText;
	exampleQuery2: DetailsText;
	promptMicrophoneLabel: DetailsText;
	loadingHeader: DetailsText;
	connectionErrorHeader: DetailsText;
	connectionErrorMicrophoneLabel: DetailsText;
	permissionsHeader: DetailsText;
	permissionsSubtext: DetailsText;
	disabledHeader: DetailsText;
	disabledSubtext: DetailsText;
	microphoneButtonAriaLabel: DetailsText;
	exitButton: ClearButtonClass;
	trackingParams: string;
	microphoneOffPromptHeader: DetailsText;
}

export interface YouTubeDownloadVideoDetails {
	embed: Embed;
	title: string;
	description: string;
	lengthSeconds: string;
	ownerProfileUrl: string;
	externalChannelId: string;
	isFamilySafe: boolean;
	availableCountries: string[];
	isUnlisted: boolean;
	hasYpcMetadata: boolean;
	viewCount: string;
	category: string;
	publishDate: string;
	ownerChannelName: string;
	uploadDate: string;
	isShortsEligible: boolean;
	videoId: string;
	keywords: string[];
	channelId: string;
	isOwnerViewing: boolean;
	isCrawlable: boolean;
	allowRatings: boolean;
	author: VideoDetailsAuthor;
	isPrivate: boolean;
	isUnpluggedCorpus: boolean;
	isLiveContent: boolean;
	media: Media;
	likes: number;
	age_restricted: boolean;
	video_url: string;
	storyboards: Storyboard[];
	chapters: VideoDetailsChapter[];
	thumbnails: TentacledThumbnail[];
}

export interface VideoDetailsAuthor {
	id: string;
	name: string;
	user: string;
	channel_url: string;
	external_channel_url: string;
	user_url: string;
	thumbnails: AuthorThumbnail[];
	verified: boolean;
	subscriber_count: number;
}

export interface VideoDetailsChapter {
	title: string;
	start_time: number;
}

export interface Storyboard {
	templateUrl: string;
	thumbnailWidth: number;
	thumbnailHeight: number;
	thumbnailCount: number;
	interval: number;
	columns: number;
	rows: number;
	storyboardCount: number;
}

export interface RedditDownload {
	approved_at_utc: null;
	subreddit: string;
	selftext: string;
	user_reports: any[];
	saved: boolean;
	mod_reason_title: null;
	gilded: number;
	clicked: boolean;
	title: string;
	link_flair_richtext: FlairRichtext[];
	subreddit_name_prefixed: string;
	hidden: boolean;
	pwls: null;
	link_flair_css_class: null;
	downs: number;
	thumbnail_height: number;
	top_awarded_type: null;
	hide_score: boolean;
	name: string;
	quarantine: boolean;
	link_flair_text_color: null;
	upvote_ratio: number;
	author_flair_background_color: string;
	subreddit_type: string;
	ups: number;
	total_awards_received: number;
	media_embed: Gildings;
	thumbnail_width: number;
	author_flair_template_id: null;
	is_original_content: boolean;
	author_fullname: string;
	secure_media: Media;
	is_reddit_media_domain: boolean;
	is_meta: boolean;
	category: null;
	secure_media_embed: Gildings;
	link_flair_text: string;
	can_mod_post: boolean;
	score: number;
	approved_by: null;
	is_created_from_ads_ui: boolean;
	author_premium: boolean;
	thumbnail: string;
	edited: boolean;
	author_flair_css_class: null;
	author_flair_richtext: FlairRichtext[];
	gildings: Gildings;
	post_hint: string;
	content_categories: null;
	is_self: boolean;
	mod_note: null;
	created: number;
	link_flair_type: string;
	wls: null;
	removed_by_category: null;
	banned_by: null;
	author_flair_type: string;
	domain: string;
	allow_live_comments: boolean;
	selftext_html: null;
	likes: null;
	suggested_sort: null;
	banned_at_utc: null;
	url_overridden_by_dest: string;
	view_count: null;
	archived: boolean;
	no_follow: boolean;
	is_crosspostable: boolean;
	pinned: boolean;
	over_18: boolean;
	preview: Preview;
	all_awardings: any[];
	awarders: any[];
	media_only: boolean;
	can_gild: boolean;
	spoiler: boolean;
	locked: boolean;
	author_flair_text: string;
	treatment_tags: any[];
	visited: boolean;
	removed_by: null;
	num_reports: null;
	distinguished: null;
	subreddit_id: string;
	author_is_blocked: boolean;
	mod_reason_by: null;
	removal_reason: null;
	link_flair_background_color: null;
	id: string;
	is_robot_indexable: boolean;
	num_duplicates: number;
	report_reasons: null;
	author: string;
	discussion_type: null;
	num_comments: number;
	send_replies: boolean;
	media: Media;
	contest_mode: boolean;
	author_patreon_flair: boolean;
	author_flair_text_color: string;
	permalink: string;
	stickied: boolean;
	url: string;
	subreddit_subscribers: number;
	created_utc: number;
	num_crossposts: number;
	mod_reports: any[];
	is_video: boolean;
}

export interface FlairRichtext {
	e: string;
	t: string;
}

export interface Gildings {}

export interface Media {
	reddit_video: RedditVideo;
}

export interface RedditVideo {
	bitrate_kbps: number;
	fallback_url: string;
	has_audio: boolean;
	height: number;
	width: number;
	scrubber_media_url: string;
	dash_url: string;
	duration: number;
	hls_url: string;
	is_gif: boolean;
	transcoding_status: string;
}

export interface Preview {
	images: Image[];
	enabled: boolean;
}

export interface Image {
	source: Source;
	resolutions: Source[];
	variants: Gildings;
	id: string;
}

export interface Source {
	url: string;
	width: number;
	height: number;
}
