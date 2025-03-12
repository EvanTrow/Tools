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
	player_response: {
		responseContext: {
			serviceTrackingParams: {
				service: string;
				params: {
					key: string;
					value: string;
				}[];
			}[];
			maxAgeSeconds: number;
			mainAppWebResponseContext: {
				loggedOut: boolean;
				trackingParam: string;
			};
			webResponseContextExtensionData: {
				hasDecorated: boolean;
			};
		};
		playabilityStatus: {
			status: string;
			playableInEmbed: boolean;
			miniplayer: {
				miniplayerRenderer: {
					playbackMode: string;
				};
			};
			contextParams: string;
		};
		streamingData: {
			expiresInSeconds: string;
			formats: {
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
			}[];
			adaptiveFormats: {
				itag: number;
				url: string;
				mimeType: string;
				bitrate: number;
				width?: number;
				height?: number;
				initRange: {
					start: string;
					end: string;
				};
				indexRange: {
					start: string;
					end: string;
				};
				lastModified: string;
				contentLength: string;
				quality: string;
				fps?: number;
				qualityLabel?: string;
				projectionType: string;
				averageBitrate?: number;
				approxDurationMs: string;
				colorInfo?: {
					primaries: string;
					transferCharacteristics: string;
					matrixCoefficients: string;
				};
				highReplication?: boolean;
				audioQuality?: string;
				audioSampleRate?: string;
				audioChannels?: number;
				loudnessDb?: number;
				xtags?: string;
				isDrc?: boolean;
			}[];
			serverAbrStreamingUrl: string;
		};
		playbackTracking: {
			videostatsPlaybackUrl: {
				baseUrl: string;
			};
			videostatsDelayplayUrl: {
				baseUrl: string;
			};
			videostatsWatchtimeUrl: {
				baseUrl: string;
			};
			ptrackingUrl: {
				baseUrl: string;
			};
			qoeUrl: {
				baseUrl: string;
			};
			atrUrl: {
				baseUrl: string;
				elapsedMediaTimeSeconds: number;
			};
			videostatsScheduledFlushWalltimeSeconds: number[];
			videostatsDefaultFlushIntervalSeconds: number;
		};
		captions: {
			playerCaptionsTracklistRenderer: {
				captionTracks: {
					baseUrl: string;
					name: {
						simpleText: string;
					};
					vssId: string;
					languageCode: string;
					kind: string;
					isTranslatable: boolean;
					trackName: string;
				}[];
				audioTracks: {
					captionTrackIndices: number[];
				}[];
				translationLanguages: {
					languageCode: string;
					languageName: {
						simpleText: string;
					};
				}[];
				defaultAudioTrackIndex: number;
			};
		};
		videoDetails: {
			videoId: string;
			title: string;
			lengthSeconds: string;
			channelId: string;
			isOwnerViewing: boolean;
			shortDescription: string;
			isCrawlable: boolean;
			thumbnail: {
				thumbnails: {
					url: string;
					width: number;
					height: number;
				}[];
			};
			allowRatings: boolean;
			viewCount: string;
			author: string;
			isPrivate: boolean;
			isUnpluggedCorpus: boolean;
			isLiveContent: boolean;
		};
		annotations: {
			playerAnnotationsExpandedRenderer: {
				featuredChannel: {
					startTimeMs: string;
					endTimeMs: string;
					watermark: {
						thumbnails: {
							url: string;
							width: number;
							height: number;
						}[];
					};
					trackingParams: string;
					navigationEndpoint: {
						clickTrackingParams: string;
						commandMetadata: {
							webCommandMetadata: {
								url: string;
								webPageType: string;
								rootVe: number;
								apiUrl: string;
							};
						};
						browseEndpoint: {
							browseId: string;
						};
					};
					channelName: string;
					subscribeButton: {
						subscribeButtonRenderer: {
							buttonText: {
								runs: {
									text: string;
								}[];
							};
							subscribed: boolean;
							enabled: boolean;
							type: string;
							channelId: string;
							showPreferences: boolean;
							subscribedButtonText: {
								runs: {
									text: string;
								}[];
							};
							unsubscribedButtonText: {
								runs: {
									text: string;
								}[];
							};
							trackingParams: string;
							unsubscribeButtonText: {
								runs: {
									text: string;
								}[];
							};
							serviceEndpoints: {
								clickTrackingParams: string;
								commandMetadata: {
									webCommandMetadata: {
										sendPost: boolean;
										apiUrl?: string;
									};
								};
								subscribeEndpoint?: {
									channelIds: string[];
									params: string;
								};
								signalServiceEndpoint?: {
									signal: string;
									actions: {
										clickTrackingParams: string;
										openPopupAction: {
											popup: {
												confirmDialogRenderer: {
													trackingParams: string;
													dialogMessages: {
														runs: {
															text: string;
														}[];
													}[];
													confirmButton: {
														buttonRenderer: {
															style: string;
															size: string;
															isDisabled: boolean;
															text: {
																runs: {
																	text: string;
																}[];
															};
															serviceEndpoint: {
																clickTrackingParams: string;
																commandMetadata: {
																	webCommandMetadata: {
																		sendPost: boolean;
																		apiUrl: string;
																	};
																};
																unsubscribeEndpoint: {
																	channelIds: string[];
																	params: string;
																};
															};
															accessibility: {
																label: string;
															};
															trackingParams: string;
														};
													};
													cancelButton: {
														buttonRenderer: {
															style: string;
															size: string;
															isDisabled: boolean;
															text: {
																runs: {
																	text: string;
																}[];
															};
															accessibility: {
																label: string;
															};
															trackingParams: string;
														};
													};
													primaryIsCancel: boolean;
												};
											};
											popupType: string;
										};
									}[];
								};
							}[];
							subscribeAccessibility: {
								accessibilityData: {
									label: string;
								};
							};
							unsubscribeAccessibility: {
								accessibilityData: {
									label: string;
								};
							};
							signInEndpoint: {
								clickTrackingParams: string;
								commandMetadata: {
									webCommandMetadata: {
										url: string;
									};
								};
							};
						};
					};
				};
				allowSwipeDismiss: boolean;
				annotationId: string;
			};
		}[];
		playerConfig: {
			audioConfig: {
				loudnessDb: number;
				perceptualLoudnessDb: number;
				enablePerFormatLoudness: boolean;
			};
			streamSelectionConfig: {
				maxBitrate: string;
			};
			mediaCommonConfig: {
				dynamicReadaheadConfig: {
					maxReadAheadMediaTimeMs: number;
					minReadAheadMediaTimeMs: number;
					readAheadGrowthRateMs: number;
				};
				mediaUstreamerRequestConfig: {
					videoPlaybackUstreamerConfig: string;
				};
				useServerDrivenAbr: boolean;
				serverPlaybackStartConfig: {
					enable: boolean;
					playbackStartPolicy: {
						startMinReadaheadPolicy: {
							minReadaheadMs: number;
						}[];
					};
				};
			};
			webPlayerConfig: {
				useCobaltTvosDash: boolean;
				webPlayerActionsPorting: {
					getSharePanelCommand: {
						clickTrackingParams: string;
						commandMetadata: {
							webCommandMetadata: {
								sendPost: boolean;
								apiUrl: string;
							};
						};
						webPlayerShareEntityServiceEndpoint: {
							serializedShareEntity: string;
						};
					};
					subscribeCommand: {
						clickTrackingParams: string;
						commandMetadata: {
							webCommandMetadata: {
								sendPost: boolean;
								apiUrl: string;
							};
						};
						subscribeEndpoint: {
							channelIds: string[];
							params: string;
						};
					};
					unsubscribeCommand: {
						clickTrackingParams: string;
						commandMetadata: {
							webCommandMetadata: {
								sendPost: boolean;
								apiUrl: string;
							};
						};
						unsubscribeEndpoint: {
							channelIds: string[];
							params: string;
						};
					};
					addToWatchLaterCommand: {
						clickTrackingParams: string;
						commandMetadata: {
							webCommandMetadata: {
								sendPost: boolean;
								apiUrl: string;
							};
						};
						playlistEditEndpoint: {
							playlistId: string;
							actions: {
								addedVideoId: string;
								action: string;
							}[];
						};
					};
					removeFromWatchLaterCommand: {
						clickTrackingParams: string;
						commandMetadata: {
							webCommandMetadata: {
								sendPost: boolean;
								apiUrl: string;
							};
						};
						playlistEditEndpoint: {
							playlistId: string;
							actions: {
								action: string;
								removedVideoId: string;
							}[];
						};
					};
				};
			};
		};
		storyboards: {
			playerStoryboardSpecRenderer: {
				spec: string;
				recommendedLevel: number;
				highResolutionRecommendedLevel: number;
			};
		};
		microformat: {
			playerMicroformatRenderer: {
				thumbnail: {
					thumbnails: {
						url: string;
						width: number;
						height: number;
					}[];
				};
				embed: {
					iframeUrl: string;
					width: number;
					height: number;
				};
				title: {
					simpleText: string;
				};
				description: {
					simpleText: string;
				};
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
			};
		};
		cards: {
			cardCollectionRenderer: {
				cards: {
					cardRenderer: {
						teaser: {
							simpleCardTeaserRenderer: {
								message: {
									simpleText: string;
								};
								trackingParams: string;
								prominent: boolean;
								logVisibilityUpdates: boolean;
								onTapCommand: {
									clickTrackingParams: string;
									changeEngagementPanelVisibilityAction: {
										targetId: string;
										visibility: string;
									};
								};
							};
						};
						cueRanges: {
							startCardActiveMs: string;
							endCardActiveMs: string;
							teaserDurationMs: string;
							iconAfterTeaserMs: string;
						}[];
						trackingParams: string;
					};
				}[];
				headerText: {
					simpleText: string;
				};
				icon: {
					infoCardIconRenderer: {
						trackingParams: string;
					};
				};
				closeButton: {
					infoCardIconRenderer: {
						trackingParams: string;
					};
				};
				trackingParams: string;
				allowTeaserDismiss: boolean;
				logIconVisibilityUpdates: boolean;
			};
		};
		trackingParams: string;
		videoQualityPromoSupportedRenderers: {
			videoQualityPromoRenderer: {
				triggerCriteria: {
					connectionWhitelist: string[];
					joinLatencySeconds: number;
					rebufferTimeSeconds: number;
					watchTimeWindowSeconds: number;
					refractorySeconds: number;
				};
				text: {
					runs: {
						text: string;
						bold?: boolean;
					}[];
				};
				endpoint: {
					clickTrackingParams: string;
					commandMetadata: {
						webCommandMetadata: {
							url: string;
							webPageType: string;
							rootVe: number;
						};
					};
					urlEndpoint: {
						url: string;
						target: string;
					};
				};
				trackingParams: string;
				snackbar: {
					notificationActionRenderer: {
						responseText: {
							runs: {
								text: string;
							}[];
						};
						actionButton: {
							buttonRenderer: {
								text: {
									runs: {
										text: string;
									}[];
								};
								navigationEndpoint: {
									clickTrackingParams: string;
									commandMetadata: {
										webCommandMetadata: {
											url: string;
											webPageType: string;
											rootVe: number;
										};
									};
									urlEndpoint: {
										url: string;
										target: string;
									};
								};
								trackingParams: string;
							};
						};
						trackingParams: string;
					};
				};
			};
		};
		messages: {
			mealbarPromoRenderer: {
				icon: {
					thumbnails: {
						url: string;
						width: number;
						height: number;
					}[];
				};
				messageTexts: {
					runs: {
						text: string;
					}[];
				}[];
				actionButton: {
					buttonRenderer: {
						style: string;
						size: string;
						text: {
							runs: {
								text: string;
							}[];
						};
						trackingParams: string;
						command: {
							clickTrackingParams: string;
							commandExecutorCommand: {
								commands: {
									clickTrackingParams?: string;
									commandMetadata: {
										webCommandMetadata: {
											url?: string;
											webPageType?: string;
											rootVe?: number;
											sendPost?: boolean;
											apiUrl?: string;
										};
									};
									urlEndpoint?: {
										url: string;
										target: string;
									};
									feedbackEndpoint?: {
										feedbackToken: string;
										uiActions: {
											hideEnclosingContainer: boolean;
										};
									};
								}[];
							};
						};
					};
				};
				dismissButton: {
					buttonRenderer: {
						style: string;
						size: string;
						text: {
							runs: {
								text: string;
							}[];
						};
						trackingParams: string;
						command: {
							clickTrackingParams: string;
							commandExecutorCommand: {
								commands: {
									clickTrackingParams: string;
									commandMetadata: {
										webCommandMetadata: {
											sendPost: boolean;
											apiUrl: string;
										};
									};
									feedbackEndpoint: {
										feedbackToken: string;
										uiActions: {
											hideEnclosingContainer: boolean;
										};
									};
								}[];
							};
						};
					};
				};
				triggerCondition: string;
				style: string;
				trackingParams: string;
				impressionEndpoints: {
					clickTrackingParams: string;
					commandMetadata: {
						webCommandMetadata: {
							sendPost: boolean;
							apiUrl: string;
						};
					};
					feedbackEndpoint: {
						feedbackToken: string;
						uiActions: {
							hideEnclosingContainer: boolean;
						};
					};
				}[];
				isVisible: boolean;
				messageTitle: {
					runs: {
						text: string;
					}[];
				};
			};
		}[];
		adBreakHeartbeatParams: string;
		frameworkUpdates: {
			entityBatchUpdate: {
				mutations: {
					entityKey: string;
					type: string;
					payload: {
						offlineabilityEntity: {
							key: string;
							addToOfflineButtonState: string;
						};
					};
				}[];
				timestamp: {
					seconds: string;
					nanos: number;
				};
			};
		};
	};
	response: {
		responseContext: {
			serviceTrackingParams: {
				service: string;
				params: {
					key: string;
					value: string;
				}[];
			}[];
			mainAppWebResponseContext: {
				loggedOut: boolean;
				trackingParam: string;
			};
			webResponseContextExtensionData: {
				ytConfigData: {
					visitorData: string;
					rootVisualElementType: number;
				};
				webPrefetchData: {
					navigationEndpoints: {
						clickTrackingParams: string;
						commandMetadata: {
							webCommandMetadata: {
								url: string;
								webPageType: string;
								rootVe: number;
							};
						};
						watchEndpoint: {
							videoId: string;
							params: string;
							playerParams: string;
							watchEndpointSupportedPrefetchConfig: {
								prefetchHintConfig: {
									prefetchPriority: number;
									countdownUiRelativeSecondsPrefetchCondition: number;
								};
							};
						};
					}[];
				};
				hasDecorated: boolean;
			};
		};
		contents: {
			twoColumnWatchNextResults: {
				results: {
					results: {
						contents: {
							videoPrimaryInfoRenderer?: {
								title: {
									runs: {
										text: string;
										navigationEndpoint?: {
											clickTrackingParams: string;
											commandMetadata: {
												webCommandMetadata: {
													url: string;
													webPageType: string;
													rootVe: number;
													apiUrl: string;
												};
											};
											browseEndpoint: {
												browseId: string;
												params: string;
											};
										};
										loggingDirectives?: {
											trackingParams: string;
											visibility: {
												types: string;
											};
										};
									}[];
								};
								viewCount: {
									videoViewCountRenderer: {
										viewCount: {
											simpleText: string;
										};
										shortViewCount: {
											simpleText: string;
										};
										originalViewCount: string;
									};
								};
								videoActions: {
									menuRenderer: {
										items: {
											menuNavigationItemRenderer: {
												text: {
													runs: {
														text: string;
													}[];
												};
												icon: {
													iconType: string;
												};
												navigationEndpoint: {
													clickTrackingParams: string;
													commandMetadata: {
														webCommandMetadata: {
															ignoreNavigation: boolean;
														};
													};
													modalEndpoint: {
														modal: {
															modalWithTitleAndButtonRenderer: {
																title: {
																	runs: {
																		text: string;
																	}[];
																};
																content: {
																	runs: {
																		text: string;
																	}[];
																};
																button: {
																	buttonRenderer: {
																		style: string;
																		size: string;
																		isDisabled: boolean;
																		text: {
																			simpleText: string;
																		};
																		navigationEndpoint: {
																			clickTrackingParams: string;
																			commandMetadata: {
																				webCommandMetadata: {
																					url: string;
																					webPageType: string;
																					rootVe: number;
																				};
																			};
																			signInEndpoint: {
																				hack: boolean;
																			};
																		};
																		trackingParams: string;
																	};
																};
															};
														};
													};
												};
												trackingParams: string;
											};
										}[];
										trackingParams: string;
										topLevelButtons: {
											segmentedLikeDislikeButtonViewModel?: {
												likeButtonViewModel: {
													likeButtonViewModel: {
														toggleButtonViewModel: {
															toggleButtonViewModel: {
																defaultButtonViewModel: {
																	buttonViewModel: {
																		iconName: string;
																		title: string;
																		onTap: {
																			serialCommand: {
																				commands: {
																					logGestureCommand?: {
																						gestureType: string;
																						trackingParams: string;
																					};
																					innertubeCommand?: {
																						clickTrackingParams: string;
																						commandMetadata: {
																							webCommandMetadata: {
																								ignoreNavigation: boolean;
																							};
																						};
																						modalEndpoint: {
																							modal: {
																								modalWithTitleAndButtonRenderer: {
																									title: {
																										simpleText: string;
																									};
																									content: {
																										simpleText: string;
																									};
																									button: {
																										buttonRenderer: {
																											style: string;
																											size: string;
																											isDisabled: boolean;
																											text: {
																												simpleText: string;
																											};
																											navigationEndpoint: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														url: string;
																														webPageType: string;
																														rootVe: number;
																													};
																												};
																												signInEndpoint: {
																													nextEndpoint: {
																														clickTrackingParams: string;
																														commandMetadata: {
																															webCommandMetadata: {
																																sendPost: boolean;
																																apiUrl: string;
																															};
																														};
																														likeEndpoint: {
																															status: string;
																															target: {
																																videoId: string;
																															};
																															likeParams: string;
																														};
																													};
																													idamTag: string;
																												};
																											};
																											trackingParams: string;
																										};
																									};
																								};
																							};
																						};
																					};
																				}[];
																			};
																		};
																		accessibilityText: string;
																		style: string;
																		trackingParams: string;
																		isFullWidth: boolean;
																		type: string;
																		buttonSize: string;
																		accessibilityId: string;
																		tooltip: string;
																	};
																};
																toggledButtonViewModel: {
																	buttonViewModel: {
																		iconName: string;
																		title: string;
																		onTap: {
																			serialCommand: {
																				commands: {
																					logGestureCommand?: {
																						gestureType: string;
																						trackingParams: string;
																					};
																					innertubeCommand?: {
																						clickTrackingParams: string;
																						commandMetadata: {
																							webCommandMetadata: {
																								sendPost: boolean;
																								apiUrl: string;
																							};
																						};
																						likeEndpoint: {
																							status: string;
																							target: {
																								videoId: string;
																							};
																							removeLikeParams: string;
																						};
																					};
																				}[];
																			};
																		};
																		accessibilityText: string;
																		style: string;
																		trackingParams: string;
																		isFullWidth: boolean;
																		type: string;
																		buttonSize: string;
																		accessibilityId: string;
																		tooltip: string;
																	};
																};
																identifier: string;
																trackingParams: string;
																isTogglingDisabled: boolean;
															};
														};
														likeStatusEntityKey: string;
														likeStatusEntity: {
															key: string;
															likeStatus: string;
														};
													};
												};
												dislikeButtonViewModel: {
													dislikeButtonViewModel: {
														toggleButtonViewModel: {
															toggleButtonViewModel: {
																defaultButtonViewModel: {
																	buttonViewModel: {
																		iconName: string;
																		title: string;
																		onTap: {
																			serialCommand: {
																				commands: {
																					logGestureCommand?: {
																						gestureType: string;
																						trackingParams: string;
																					};
																					innertubeCommand?: {
																						clickTrackingParams: string;
																						commandMetadata: {
																							webCommandMetadata: {
																								ignoreNavigation: boolean;
																							};
																						};
																						modalEndpoint: {
																							modal: {
																								modalWithTitleAndButtonRenderer: {
																									title: {
																										simpleText: string;
																									};
																									content: {
																										simpleText: string;
																									};
																									button: {
																										buttonRenderer: {
																											style: string;
																											size: string;
																											isDisabled: boolean;
																											text: {
																												simpleText: string;
																											};
																											navigationEndpoint: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														url: string;
																														webPageType: string;
																														rootVe: number;
																													};
																												};
																												signInEndpoint: {
																													nextEndpoint: {
																														clickTrackingParams: string;
																														commandMetadata: {
																															webCommandMetadata: {
																																sendPost: boolean;
																																apiUrl: string;
																															};
																														};
																														likeEndpoint: {
																															status: string;
																															target: {
																																videoId: string;
																															};
																															dislikeParams: string;
																														};
																													};
																													idamTag: string;
																												};
																											};
																											trackingParams: string;
																										};
																									};
																								};
																							};
																						};
																					};
																				}[];
																			};
																		};
																		accessibilityText: string;
																		style: string;
																		trackingParams: string;
																		isFullWidth: boolean;
																		type: string;
																		buttonSize: string;
																		accessibilityId: string;
																		tooltip: string;
																	};
																};
																toggledButtonViewModel: {
																	buttonViewModel: {
																		iconName: string;
																		title: string;
																		onTap: {
																			serialCommand: {
																				commands: {
																					logGestureCommand?: {
																						gestureType: string;
																						trackingParams: string;
																					};
																					innertubeCommand?: {
																						clickTrackingParams: string;
																						commandMetadata: {
																							webCommandMetadata: {
																								sendPost: boolean;
																								apiUrl: string;
																							};
																						};
																						likeEndpoint: {
																							status: string;
																							target: {
																								videoId: string;
																							};
																							removeLikeParams: string;
																						};
																					};
																				}[];
																			};
																		};
																		accessibilityText: string;
																		style: string;
																		trackingParams: string;
																		isFullWidth: boolean;
																		type: string;
																		buttonSize: string;
																		accessibilityId: string;
																		tooltip: string;
																	};
																};
																trackingParams: string;
																isTogglingDisabled: boolean;
															};
														};
														dislikeEntityKey: string;
													};
												};
												iconType: string;
												likeCountEntity: {
													key: string;
												};
												dynamicLikeCountUpdateData: {
													updateStatusKey: string;
													placeholderLikeCountValuesKey: string;
													updateDelayLoopId: string;
													updateDelaySec: number;
												};
												teasersOrderEntityKey: string;
											};
											buttonViewModel?: {
												iconName: string;
												title: string;
												onTap: {
													serialCommand: {
														commands: {
															logGestureCommand?: {
																gestureType: string;
																trackingParams: string;
															};
															innertubeCommand?: {
																clickTrackingParams: string;
																commandMetadata: {
																	webCommandMetadata: {
																		sendPost: boolean;
																		apiUrl: string;
																	};
																};
																shareEntityServiceEndpoint: {
																	serializedShareEntity: string;
																	commands: {
																		clickTrackingParams: string;
																		openPopupAction: {
																			popup: {
																				unifiedSharePanelRenderer: {
																					trackingParams: string;
																					showLoadingSpinner: boolean;
																				};
																			};
																			popupType: string;
																			beReused: boolean;
																		};
																	}[];
																};
															};
														}[];
													};
												};
												accessibilityText: string;
												style: string;
												trackingParams: string;
												isFullWidth: boolean;
												type: string;
												buttonSize: string;
												state: string;
												accessibilityId: string;
												tooltip: string;
											};
										}[];
										accessibility: {
											accessibilityData: {
												label: string;
											};
										};
										flexibleItems: {
											menuFlexibleItemRenderer: {
												menuItem: {
													menuServiceItemDownloadRenderer?: {
														serviceEndpoint: {
															clickTrackingParams: string;
															offlineVideoEndpoint: {
																videoId: string;
																onAddCommand: {
																	clickTrackingParams: string;
																	getDownloadActionCommand: {
																		videoId: string;
																		params: string;
																		offlineabilityEntityKey: string;
																	};
																};
															};
														};
														trackingParams: string;
													};
													menuServiceItemRenderer?: {
														text: {
															runs: {
																text: string;
															}[];
														};
														icon: {
															iconType: string;
														};
														serviceEndpoint: {
															clickTrackingParams: string;
															commandMetadata: {
																webCommandMetadata: {
																	ignoreNavigation: boolean;
																};
															};
															modalEndpoint: {
																modal: {
																	modalWithTitleAndButtonRenderer: {
																		title: {
																			runs: {
																				text: string;
																			}[];
																		};
																		content: {
																			runs: {
																				text: string;
																			}[];
																		};
																		button: {
																			buttonRenderer: {
																				style: string;
																				size: string;
																				isDisabled: boolean;
																				text: {
																					simpleText: string;
																				};
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																						};
																					};
																					signInEndpoint: {
																						nextEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									url: string;
																									webPageType: string;
																									rootVe: number;
																								};
																							};
																							watchEndpoint: {
																								videoId: string;
																								watchEndpointSupportedOnesieConfig: {
																									html5PlaybackOnesieConfig: {
																										commonConfig: {
																											url: string;
																										};
																									};
																								};
																							};
																						};
																						idamTag: string;
																					};
																				};
																				trackingParams: string;
																			};
																		};
																	};
																};
															};
														};
														trackingParams: string;
													};
												};
												topLevelButton: {
													downloadButtonRenderer?: {
														trackingParams: string;
														style: string;
														size: string;
														targetId: string;
														command: {
															clickTrackingParams: string;
															offlineVideoEndpoint: {
																videoId: string;
																onAddCommand: {
																	clickTrackingParams: string;
																	getDownloadActionCommand: {
																		videoId: string;
																		params: string;
																		offlineabilityEntityKey: string;
																	};
																};
															};
														};
													};
													buttonViewModel?: {
														iconName: string;
														title: string;
														onTap: {
															serialCommand: {
																commands: {
																	logGestureCommand?: {
																		gestureType: string;
																		trackingParams: string;
																	};
																	innertubeCommand?: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				ignoreNavigation: boolean;
																			};
																		};
																		modalEndpoint: {
																			modal: {
																				modalWithTitleAndButtonRenderer: {
																					title: {
																						runs: {
																							text: string;
																						}[];
																					};
																					content: {
																						runs: {
																							text: string;
																						}[];
																					};
																					button: {
																						buttonRenderer: {
																							style: string;
																							size: string;
																							isDisabled: boolean;
																							text: {
																								simpleText: string;
																							};
																							navigationEndpoint: {
																								clickTrackingParams: string;
																								commandMetadata: {
																									webCommandMetadata: {
																										url: string;
																										webPageType: string;
																										rootVe: number;
																									};
																								};
																								signInEndpoint: {
																									nextEndpoint: {
																										clickTrackingParams: string;
																										commandMetadata: {
																											webCommandMetadata: {
																												url: string;
																												webPageType: string;
																												rootVe: number;
																											};
																										};
																										watchEndpoint: {
																											videoId: string;
																											watchEndpointSupportedOnesieConfig: {
																												html5PlaybackOnesieConfig: {
																													commonConfig: {
																														url: string;
																													};
																												};
																											};
																										};
																									};
																									idamTag: string;
																								};
																							};
																							trackingParams: string;
																						};
																					};
																				};
																			};
																		};
																	};
																}[];
															};
														};
														accessibilityText: string;
														style: string;
														trackingParams: string;
														isFullWidth: boolean;
														type: string;
														buttonSize: string;
														tooltip: string;
													};
												};
											};
										}[];
									};
								};
								trackingParams: string;
								dateText: {
									simpleText: string;
								};
								relativeDateText: {
									accessibility: {
										accessibilityData: {
											label: string;
										};
									};
									simpleText: string;
								};
							};
							videoSecondaryInfoRenderer?: {
								owner: {
									videoOwnerRenderer: {
										thumbnail: {
											thumbnails: {
												url: string;
												width: number;
												height: number;
											}[];
										};
										title: {
											runs: {
												text: string;
												navigationEndpoint: {
													clickTrackingParams: string;
													commandMetadata: {
														webCommandMetadata: {
															url: string;
															webPageType: string;
															rootVe: number;
															apiUrl: string;
														};
													};
													browseEndpoint: {
														browseId: string;
														canonicalBaseUrl: string;
													};
												};
											}[];
										};
										subscriptionButton: {
											type: string;
										};
										navigationEndpoint: {
											clickTrackingParams: string;
											commandMetadata: {
												webCommandMetadata: {
													url: string;
													webPageType: string;
													rootVe: number;
													apiUrl: string;
												};
											};
											browseEndpoint: {
												browseId: string;
												canonicalBaseUrl: string;
											};
										};
										subscriberCountText: {
											accessibility: {
												accessibilityData: {
													label: string;
												};
											};
											simpleText: string;
										};
										trackingParams: string;
									};
								};
								subscribeButton: {
									subscribeButtonRenderer: {
										buttonText: {
											runs: {
												text: string;
											}[];
										};
										subscribed: boolean;
										enabled: boolean;
										type: string;
										channelId: string;
										showPreferences: boolean;
										subscribedButtonText: {
											runs: {
												text: string;
											}[];
										};
										unsubscribedButtonText: {
											runs: {
												text: string;
											}[];
										};
										trackingParams: string;
										unsubscribeButtonText: {
											runs: {
												text: string;
											}[];
										};
										subscribeAccessibility: {
											accessibilityData: {
												label: string;
											};
										};
										unsubscribeAccessibility: {
											accessibilityData: {
												label: string;
											};
										};
										notificationPreferenceButton: {
											subscriptionNotificationToggleButtonRenderer: {
												states: {
													stateId: number;
													nextStateId: number;
													state: {
														buttonRenderer: {
															style: string;
															size: string;
															isDisabled: boolean;
															icon: {
																iconType: string;
															};
															accessibility: {
																label: string;
															};
															trackingParams: string;
															accessibilityData: {
																accessibilityData: {
																	label: string;
																};
															};
														};
													};
												}[];
												currentStateId: number;
												trackingParams: string;
												command: {
													clickTrackingParams: string;
													commandExecutorCommand: {
														commands: {
															clickTrackingParams: string;
															openPopupAction: {
																popup: {
																	menuPopupRenderer: {
																		items: {
																			menuServiceItemRenderer: {
																				text: {
																					simpleText?: string;
																					runs?: {
																						text: string;
																					}[];
																				};
																				icon: {
																					iconType: string;
																				};
																				serviceEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							sendPost: boolean;
																							apiUrl?: string;
																						};
																					};
																					modifyChannelNotificationPreferenceEndpoint?: {
																						params: string;
																					};
																					signalServiceEndpoint?: {
																						signal: string;
																						actions: {
																							clickTrackingParams: string;
																							openPopupAction: {
																								popup: {
																									confirmDialogRenderer: {
																										trackingParams: string;
																										dialogMessages: {
																											runs: {
																												text: string;
																											}[];
																										}[];
																										confirmButton: {
																											buttonRenderer: {
																												style: string;
																												size: string;
																												isDisabled: boolean;
																												text: {
																													runs: {
																														text: string;
																													}[];
																												};
																												serviceEndpoint: {
																													clickTrackingParams: string;
																													commandMetadata: {
																														webCommandMetadata: {
																															sendPost: boolean;
																															apiUrl: string;
																														};
																													};
																													unsubscribeEndpoint: {
																														channelIds: string[];
																														params: string;
																													};
																												};
																												accessibility: {
																													label: string;
																												};
																												trackingParams: string;
																											};
																										};
																										cancelButton: {
																											buttonRenderer: {
																												style: string;
																												size: string;
																												isDisabled: boolean;
																												text: {
																													runs: {
																														text: string;
																													}[];
																												};
																												accessibility: {
																													label: string;
																												};
																												trackingParams: string;
																											};
																										};
																										primaryIsCancel: boolean;
																									};
																								};
																								popupType: string;
																							};
																						}[];
																					};
																				};
																				trackingParams: string;
																				isSelected?: boolean;
																			};
																		}[];
																	};
																};
																popupType: string;
															};
														}[];
													};
												};
												targetId: string;
												secondaryIcon: {
													iconType: string;
												};
											};
										};
										targetId: string;
										signInEndpoint: {
											clickTrackingParams: string;
											commandMetadata: {
												webCommandMetadata: {
													ignoreNavigation: boolean;
												};
											};
											modalEndpoint: {
												modal: {
													modalWithTitleAndButtonRenderer: {
														title: {
															simpleText: string;
														};
														content: {
															simpleText: string;
														};
														button: {
															buttonRenderer: {
																style: string;
																size: string;
																isDisabled: boolean;
																text: {
																	simpleText: string;
																};
																navigationEndpoint: {
																	clickTrackingParams: string;
																	commandMetadata: {
																		webCommandMetadata: {
																			url: string;
																			webPageType: string;
																			rootVe: number;
																		};
																	};
																	signInEndpoint: {
																		nextEndpoint: {
																			clickTrackingParams: string;
																			commandMetadata: {
																				webCommandMetadata: {
																					url: string;
																					webPageType: string;
																					rootVe: number;
																				};
																			};
																			watchEndpoint: {
																				videoId: string;
																				watchEndpointSupportedOnesieConfig: {
																					html5PlaybackOnesieConfig: {
																						commonConfig: {
																							url: string;
																						};
																					};
																				};
																			};
																		};
																		continueAction: string;
																		idamTag: string;
																	};
																};
																trackingParams: string;
															};
														};
													};
												};
											};
										};
										subscribedEntityKey: string;
										onSubscribeEndpoints: {
											clickTrackingParams: string;
											commandMetadata: {
												webCommandMetadata: {
													sendPost: boolean;
													apiUrl: string;
												};
											};
											subscribeEndpoint: {
												channelIds: string[];
												params: string;
											};
										}[];
										onUnsubscribeEndpoints: {
											clickTrackingParams: string;
											commandMetadata: {
												webCommandMetadata: {
													sendPost: boolean;
												};
											};
											signalServiceEndpoint: {
												signal: string;
												actions: {
													clickTrackingParams: string;
													openPopupAction: {
														popup: {
															confirmDialogRenderer: {
																trackingParams: string;
																dialogMessages: {
																	runs: {
																		text: string;
																	}[];
																}[];
																confirmButton: {
																	buttonRenderer: {
																		style: string;
																		size: string;
																		isDisabled: boolean;
																		text: {
																			runs: {
																				text: string;
																			}[];
																		};
																		serviceEndpoint: {
																			clickTrackingParams: string;
																			commandMetadata: {
																				webCommandMetadata: {
																					sendPost: boolean;
																					apiUrl: string;
																				};
																			};
																			unsubscribeEndpoint: {
																				channelIds: string[];
																				params: string;
																			};
																		};
																		accessibility: {
																			label: string;
																		};
																		trackingParams: string;
																	};
																};
																cancelButton: {
																	buttonRenderer: {
																		style: string;
																		size: string;
																		isDisabled: boolean;
																		text: {
																			runs: {
																				text: string;
																			}[];
																		};
																		accessibility: {
																			label: string;
																		};
																		trackingParams: string;
																	};
																};
																primaryIsCancel: boolean;
															};
														};
														popupType: string;
													};
												}[];
											};
										}[];
									};
								};
								metadataRowContainer: {
									metadataRowContainerRenderer: {
										collapsedItemCount: number;
										trackingParams: string;
									};
								};
								showMoreText: {
									simpleText: string;
								};
								showLessText: {
									simpleText: string;
								};
								trackingParams: string;
								defaultExpanded: boolean;
								descriptionCollapsedLines: number;
								showMoreCommand: {
									clickTrackingParams: string;
									commandExecutorCommand: {
										commands: {
											clickTrackingParams: string;
											changeEngagementPanelVisibilityAction?: {
												targetId: string;
												visibility: string;
											};
											scrollToEngagementPanelCommand?: {
												targetId: string;
											};
										}[];
									};
								};
								showLessCommand: {
									clickTrackingParams: string;
									changeEngagementPanelVisibilityAction: {
										targetId: string;
										visibility: string;
									};
								};
								attributedDescription: {
									content: string;
									styleRuns: {
										startIndex: number;
										length: number;
										styleRunExtensions: {
											styleRunColorMapExtension: {
												colorMap: {
													key: string;
													value: number;
												}[];
											};
										};
										fontFamilyName: string;
									}[];
								};
								headerRuns: {
									startIndex: number;
									length: number;
									headerMapping: string;
								}[];
							};
							itemSectionRenderer?: {
								contents: {
									continuationItemRenderer: {
										trigger: string;
										continuationEndpoint: {
											clickTrackingParams: string;
											commandMetadata: {
												webCommandMetadata: {
													sendPost: boolean;
													apiUrl: string;
												};
											};
											continuationCommand: {
												token: string;
												request: string;
											};
										};
									};
								}[];
								trackingParams: string;
								sectionIdentifier: string;
								targetId: string;
							};
						}[];
						trackingParams: string;
					};
				};
				secondaryResults: {
					secondaryResults: {
						results: {
							compactVideoRenderer?: {
								videoId: string;
								thumbnail: {
									thumbnails: {
										url: string;
										width: number;
										height: number;
									}[];
								};
								title: {
									accessibility: {
										accessibilityData: {
											label: string;
										};
									};
									simpleText: string;
								};
								longBylineText: {
									runs: {
										text: string;
										navigationEndpoint: {
											clickTrackingParams: string;
											commandMetadata: {
												webCommandMetadata: {
													url: string;
													webPageType: string;
													rootVe: number;
													apiUrl: string;
												};
											};
											browseEndpoint: {
												browseId: string;
												canonicalBaseUrl: string;
											};
										};
									}[];
								};
								publishedTimeText: {
									simpleText: string;
								};
								viewCountText: {
									simpleText: string;
								};
								lengthText: {
									accessibility: {
										accessibilityData: {
											label: string;
										};
									};
									simpleText: string;
								};
								navigationEndpoint: {
									clickTrackingParams: string;
									commandMetadata: {
										webCommandMetadata: {
											url: string;
											webPageType: string;
											rootVe: number;
										};
									};
									watchEndpoint: {
										videoId: string;
										nofollow: boolean;
										watchEndpointSupportedOnesieConfig: {
											html5PlaybackOnesieConfig: {
												commonConfig: {
													url: string;
												};
											};
										};
									};
								};
								shortBylineText: {
									runs: {
										text: string;
										navigationEndpoint: {
											clickTrackingParams: string;
											commandMetadata: {
												webCommandMetadata: {
													url: string;
													webPageType: string;
													rootVe: number;
													apiUrl: string;
												};
											};
											browseEndpoint: {
												browseId: string;
												canonicalBaseUrl: string;
											};
										};
									}[];
								};
								channelThumbnail: {
									thumbnails: {
										url: string;
										width: number;
										height: number;
									}[];
								};
								ownerBadges?: {
									metadataBadgeRenderer: {
										icon: {
											iconType: string;
										};
										style: string;
										tooltip: string;
										trackingParams: string;
										accessibilityData: {
											label: string;
										};
									};
								}[];
								trackingParams: string;
								shortViewCountText: {
									accessibility: {
										accessibilityData: {
											label: string;
										};
									};
									simpleText: string;
								};
								menu: {
									menuRenderer: {
										items: {
											menuServiceItemRenderer?: {
												text: {
													runs: {
														text: string;
													}[];
												};
												icon: {
													iconType: string;
												};
												serviceEndpoint: {
													clickTrackingParams: string;
													commandMetadata: {
														webCommandMetadata: {
															sendPost: boolean;
															apiUrl?: string;
														};
													};
													shareEntityServiceEndpoint?: {
														serializedShareEntity: string;
														commands: {
															clickTrackingParams: string;
															openPopupAction: {
																popup: {
																	unifiedSharePanelRenderer: {
																		trackingParams: string;
																		showLoadingSpinner: boolean;
																	};
																};
																popupType: string;
																beReused: boolean;
															};
														}[];
													};
													signalServiceEndpoint?: {
														signal: string;
														actions: {
															clickTrackingParams: string;
															addToPlaylistCommand?: {
																openMiniplayer: boolean;
																openListPanel: boolean;
																videoId: string;
																listType: string;
																onCreateListCommand: {
																	clickTrackingParams: string;
																	commandMetadata: {
																		webCommandMetadata: {
																			sendPost: boolean;
																			apiUrl: string;
																		};
																	};
																	createPlaylistServiceEndpoint: {
																		videoIds: string[];
																		params: string;
																	};
																};
																videoIds: string[];
															};
															openPopupAction?: {
																popup: {
																	notificationActionRenderer: {
																		responseText: {
																			simpleText: string;
																		};
																		trackingParams: string;
																	};
																};
																popupType: string;
															};
														}[];
													};
												};
												trackingParams: string;
												hasSeparator?: boolean;
											};
											menuServiceItemDownloadRenderer?: {
												serviceEndpoint: {
													clickTrackingParams: string;
													offlineVideoEndpoint: {
														videoId: string;
														onAddCommand: {
															clickTrackingParams: string;
															getDownloadActionCommand: {
																videoId: string;
																params: string;
															};
														};
													};
												};
												trackingParams: string;
											};
										}[];
										trackingParams: string;
										accessibility: {
											accessibilityData: {
												label: string;
											};
										};
										targetId?: string;
									};
								};
								thumbnailOverlays: {
									thumbnailOverlayTimeStatusRenderer?: {
										text: {
											accessibility: {
												accessibilityData: {
													label: string;
												};
											};
											simpleText: string;
										};
										style: string;
									};
									thumbnailOverlayToggleButtonRenderer?: {
										untoggledIcon: {
											iconType: string;
										};
										toggledIcon: {
											iconType: string;
										};
										untoggledTooltip: string;
										toggledTooltip: string;
										untoggledServiceEndpoint: {
											clickTrackingParams: string;
											commandMetadata: {
												webCommandMetadata: {
													sendPost: boolean;
													apiUrl?: string;
												};
											};
											signalServiceEndpoint?: {
												signal: string;
												actions: {
													clickTrackingParams: string;
													addToPlaylistCommand: {
														openMiniplayer: boolean;
														openListPanel: boolean;
														videoId: string;
														listType: string;
														onCreateListCommand: {
															clickTrackingParams: string;
															commandMetadata: {
																webCommandMetadata: {
																	sendPost: boolean;
																	apiUrl: string;
																};
															};
															createPlaylistServiceEndpoint: {
																videoIds: string[];
																params: string;
															};
														};
														videoIds: string[];
													};
												}[];
											};
											playlistEditEndpoint?: {
												playlistId: string;
												actions: {
													addedVideoId: string;
													action: string;
												}[];
											};
										};
										untoggledAccessibility: {
											accessibilityData: {
												label: string;
											};
										};
										toggledAccessibility: {
											accessibilityData: {
												label: string;
											};
										};
										trackingParams: string;
										isToggled?: boolean;
										toggledServiceEndpoint?: {
											clickTrackingParams: string;
											commandMetadata: {
												webCommandMetadata: {
													sendPost: boolean;
													apiUrl: string;
												};
											};
											playlistEditEndpoint: {
												playlistId: string;
												actions: {
													action: string;
													removedVideoId: string;
												}[];
											};
										};
									};
									thumbnailOverlayNowPlayingRenderer?: {
										text: {
											runs: {
												text: string;
											}[];
										};
									};
								}[];
								accessibility: {
									accessibilityData: {
										label: string;
									};
								};
								richThumbnail: {
									movingThumbnailRenderer: {
										movingThumbnailDetails: {
											thumbnails: {
												url: string;
												width: number;
												height: number;
											}[];
											logAsMovingThumbnail: boolean;
										};
										enableHoveredLogging: boolean;
										enableOverlay: boolean;
									};
								};
								badges?: {
									metadataBadgeRenderer: {
										style: string;
										label: string;
										trackingParams: string;
									};
								}[];
							};
							continuationItemRenderer?: {
								trigger: string;
								continuationEndpoint: {
									clickTrackingParams: string;
									commandMetadata: {
										webCommandMetadata: {
											sendPost: boolean;
											apiUrl: string;
										};
									};
									continuationCommand: {
										token: string;
										request: string;
									};
								};
								button: {
									buttonRenderer: {
										style: string;
										size: string;
										isDisabled: boolean;
										text: {
											runs: {
												text: string;
											}[];
										};
										trackingParams: string;
										command: {
											clickTrackingParams: string;
											commandMetadata: {
												webCommandMetadata: {
													sendPost: boolean;
													apiUrl: string;
												};
											};
											continuationCommand: {
												token: string;
												request: string;
											};
										};
									};
								};
							};
						}[];
						trackingParams: string;
						targetId: string;
					};
				};
				autoplay: {
					autoplay: {
						sets: {
							mode: string;
							autoplayVideo: {
								clickTrackingParams: string;
								commandMetadata: {
									webCommandMetadata: {
										url: string;
										webPageType: string;
										rootVe: number;
									};
								};
								watchEndpoint: {
									videoId: string;
									params: string;
									playerParams: string;
									watchEndpointSupportedPrefetchConfig: {
										prefetchHintConfig: {
											prefetchPriority: number;
											countdownUiRelativeSecondsPrefetchCondition: number;
										};
									};
								};
							};
						}[];
						countDownSecs: number;
						trackingParams: string;
					};
				};
			};
		};
		currentVideoEndpoint: {
			clickTrackingParams: string;
			commandMetadata: {
				webCommandMetadata: {
					url: string;
					webPageType: string;
					rootVe: number;
				};
			};
			watchEndpoint: {
				videoId: string;
				watchEndpointSupportedOnesieConfig: {
					html5PlaybackOnesieConfig: {
						commonConfig: {
							url: string;
						};
					};
				};
			};
		};
		trackingParams: string;
		playerOverlays: {
			playerOverlayRenderer: {
				endScreen: {
					watchNextEndScreenRenderer: {
						results: {
							endScreenVideoRenderer: {
								videoId: string;
								thumbnail: {
									thumbnails: {
										url: string;
										width: number;
										height: number;
									}[];
								};
								title: {
									accessibility: {
										accessibilityData: {
											label: string;
										};
									};
									simpleText: string;
								};
								shortBylineText: {
									runs: {
										text: string;
										navigationEndpoint: {
											clickTrackingParams: string;
											commandMetadata: {
												webCommandMetadata: {
													url: string;
													webPageType: string;
													rootVe: number;
													apiUrl: string;
												};
											};
											browseEndpoint: {
												browseId: string;
												canonicalBaseUrl: string;
											};
										};
									}[];
								};
								lengthText: {
									accessibility: {
										accessibilityData: {
											label: string;
										};
									};
									simpleText: string;
								};
								lengthInSeconds: number;
								navigationEndpoint: {
									clickTrackingParams: string;
									commandMetadata: {
										webCommandMetadata: {
											url: string;
											webPageType: string;
											rootVe: number;
										};
									};
									watchEndpoint: {
										videoId: string;
										watchEndpointSupportedOnesieConfig: {
											html5PlaybackOnesieConfig: {
												commonConfig: {
													url: string;
												};
											};
										};
									};
								};
								trackingParams: string;
								shortViewCountText: {
									accessibility: {
										accessibilityData: {
											label: string;
										};
									};
									simpleText: string;
								};
								publishedTimeText: {
									simpleText: string;
								};
								thumbnailOverlays: {
									thumbnailOverlayTimeStatusRenderer?: {
										text: {
											accessibility: {
												accessibilityData: {
													label: string;
												};
											};
											simpleText: string;
										};
										style: string;
									};
									thumbnailOverlayNowPlayingRenderer?: {
										text: {
											runs: {
												text: string;
											}[];
										};
									};
								}[];
							};
						}[];
						title: {
							simpleText: string;
						};
						trackingParams: string;
					};
				};
				autoplay: {
					playerOverlayAutoplayRenderer: {
						title: {
							simpleText: string;
						};
						videoTitle: {
							accessibility: {
								accessibilityData: {
									label: string;
								};
							};
							simpleText: string;
						};
						byline: {
							runs: {
								text: string;
								navigationEndpoint: {
									clickTrackingParams: string;
									commandMetadata: {
										webCommandMetadata: {
											url: string;
											webPageType: string;
											rootVe: number;
											apiUrl: string;
										};
									};
									browseEndpoint: {
										browseId: string;
										canonicalBaseUrl: string;
									};
								};
							}[];
						};
						pauseText: {
							simpleText: string;
						};
						background: {
							thumbnails: {
								url: string;
								width: number;
								height: number;
							}[];
						};
						countDownSecs: number;
						cancelButton: {
							buttonRenderer: {
								style: string;
								size: string;
								isDisabled: boolean;
								text: {
									simpleText: string;
								};
								accessibility: {
									label: string;
								};
								trackingParams: string;
								accessibilityData: {
									accessibilityData: {
										label: string;
									};
								};
								command: {
									clickTrackingParams: string;
									commandMetadata: {
										webCommandMetadata: {
											sendPost: boolean;
											apiUrl: string;
										};
									};
									getSurveyCommand: {
										endpoint: {
											watch: {
												hack: boolean;
											};
										};
										action: string;
									};
								};
							};
						};
						nextButton: {
							buttonRenderer: {
								style: string;
								size: string;
								isDisabled: boolean;
								navigationEndpoint: {
									clickTrackingParams: string;
									commandMetadata: {
										webCommandMetadata: {
											url: string;
											webPageType: string;
											rootVe: number;
										};
									};
									watchEndpoint: {
										videoId: string;
										watchEndpointSupportedOnesieConfig: {
											html5PlaybackOnesieConfig: {
												commonConfig: {
													url: string;
												};
											};
										};
									};
								};
								accessibility: {
									label: string;
								};
								trackingParams: string;
								accessibilityData: {
									accessibilityData: {
										label: string;
									};
								};
							};
						};
						trackingParams: string;
						closeButton: {
							buttonRenderer: {
								style: string;
								size: string;
								isDisabled: boolean;
								icon: {
									iconType: string;
								};
								accessibility: {
									label: string;
								};
								trackingParams: string;
							};
						};
						thumbnailOverlays: {
							thumbnailOverlayTimeStatusRenderer: {
								text: {
									accessibility: {
										accessibilityData: {
											label: string;
										};
									};
									simpleText: string;
								};
								style: string;
							};
						}[];
						preferImmediateRedirect: boolean;
						videoId: string;
						publishedTimeText: {
							simpleText: string;
						};
						webShowNewAutonavCountdown: boolean;
						webShowBigThumbnailEndscreen: boolean;
						shortViewCountText: {
							accessibility: {
								accessibilityData: {
									label: string;
								};
							};
							simpleText: string;
						};
						countDownSecsForFullscreen: number;
					};
				};
				shareButton: {
					buttonRenderer: {
						style: string;
						size: string;
						isDisabled: boolean;
						icon: {
							iconType: string;
						};
						navigationEndpoint: {
							clickTrackingParams: string;
							commandMetadata: {
								webCommandMetadata: {
									sendPost: boolean;
									apiUrl: string;
								};
							};
							shareEntityServiceEndpoint: {
								serializedShareEntity: string;
								commands: {
									clickTrackingParams: string;
									openPopupAction: {
										popup: {
											unifiedSharePanelRenderer: {
												trackingParams: string;
												showLoadingSpinner: boolean;
											};
										};
										popupType: string;
										beReused: boolean;
									};
								}[];
							};
						};
						tooltip: string;
						trackingParams: string;
					};
				};
				addToMenu: {
					menuRenderer: {
						trackingParams: string;
					};
				};
				videoDetails: {
					playerOverlayVideoDetailsRenderer: {
						title: {
							simpleText: string;
						};
						subtitle: {
							runs: {
								text: string;
							}[];
						};
					};
				};
				autonavToggle: {
					autoplaySwitchButtonRenderer: {
						onEnabledCommand: {
							clickTrackingParams: string;
							commandMetadata: {
								webCommandMetadata: {
									sendPost: boolean;
									apiUrl: string;
								};
							};
							setSettingEndpoint: {
								settingItemId: string;
								boolValue: boolean;
								settingItemIdForClient: string;
							};
						};
						onDisabledCommand: {
							clickTrackingParams: string;
							commandMetadata: {
								webCommandMetadata: {
									sendPost: boolean;
									apiUrl: string;
								};
							};
							setSettingEndpoint: {
								settingItemId: string;
								boolValue: boolean;
								settingItemIdForClient: string;
							};
						};
						enabledAccessibilityData: {
							accessibilityData: {
								label: string;
							};
						};
						disabledAccessibilityData: {
							accessibilityData: {
								label: string;
							};
						};
						trackingParams: string;
						enabled: boolean;
					};
				};
				decoratedPlayerBarRenderer: {
					decoratedPlayerBarRenderer: {
						playerBar: {
							multiMarkersPlayerBarRenderer: {
								visibleOnLoad: {
									key: string;
								};
								trackingParams: string;
							};
						};
					};
				};
				speedmasterUserEdu: {
					speedmasterEduViewModel: {
						bodyText: {
							content: string;
						};
					};
				};
			};
		};
		onResponseReceivedEndpoints: {
			clickTrackingParams: string;
			commandMetadata?: {
				webCommandMetadata: {
					sendPost: boolean;
				};
			};
			signalServiceEndpoint?: {
				signal: string;
				actions: {
					clickTrackingParams: string;
					signalAction: {
						signal: string;
					};
				}[];
			};
			loadMarkersCommand?: {
				visibleOnLoadKeys: string[];
				entityKeys: string[];
			};
		}[];
		engagementPanels: {
			engagementPanelSectionListRenderer: {
				panelIdentifier?: string;
				header?: {
					engagementPanelTitleHeaderRenderer: {
						title: {
							runs?: {
								text: string;
							}[];
							simpleText?: string;
						};
						menu?: {
							menuRenderer?: {
								items: {
									menuServiceItemRenderer: {
										text: {
											runs: {
												text: string;
											}[];
										};
										serviceEndpoint: {
											clickTrackingParams: string;
											commandMetadata: {
												webCommandMetadata: {
													sendPost: boolean;
												};
											};
											signalServiceEndpoint: {
												signal: string;
												actions: {
													clickTrackingParams: string;
													signalAction: {
														signal: string;
													};
												}[];
											};
										};
										trackingParams: string;
									};
								}[];
								trackingParams: string;
								accessibility: {
									accessibilityData: {
										label: string;
									};
								};
							};
							sortFilterSubMenuRenderer?: {
								subMenuItems: {
									title: string;
									selected: boolean;
									serviceEndpoint: {
										clickTrackingParams: string;
										commandMetadata: {
											webCommandMetadata: {
												sendPost: boolean;
												apiUrl: string;
											};
										};
										continuationCommand: {
											token: string;
											request: string;
											command: {
												clickTrackingParams: string;
												showReloadUiCommand: {
													targetId: string;
												};
											};
										};
									};
									trackingParams: string;
								}[];
								icon: {
									iconType: string;
								};
								accessibility: {
									accessibilityData: {
										label: string;
									};
								};
								trackingParams: string;
							};
						};
						visibilityButton: {
							buttonRenderer: {
								icon: {
									iconType: string;
								};
								accessibility?: {
									label: string;
								};
								trackingParams: string;
								accessibilityData: {
									accessibilityData: {
										label: string;
									};
								};
								command: {
									clickTrackingParams: string;
									changeEngagementPanelVisibilityAction?: {
										targetId: string;
										visibility: string;
									};
									commandExecutorCommand?: {
										commands: {
											clickTrackingParams: string;
											changeEngagementPanelVisibilityAction?: {
												targetId: string;
												visibility: string;
											};
											updateToggleButtonStateCommand?: {
												toggled: boolean;
												buttonId: string;
											};
										}[];
									};
									hideEngagementPanelEndpoint?: {
										panelIdentifier: string;
									};
								};
								style?: string;
								size?: string;
							};
						};
						trackingParams: string;
						contextualInfo?: {
							runs: {
								text: string;
							}[];
						};
					};
				};
				content: {
					sectionListRenderer?: {
						contents: {
							itemSectionRenderer: {
								contents: {
									continuationItemRenderer: {
										trigger: string;
										continuationEndpoint: {
											clickTrackingParams: string;
											commandMetadata: {
												webCommandMetadata: {
													sendPost: boolean;
													apiUrl: string;
												};
											};
											continuationCommand: {
												token: string;
												request: string;
											};
										};
									};
								}[];
								trackingParams: string;
								sectionIdentifier: string;
								targetId: string;
							};
						}[];
						trackingParams: string;
					};
					adsEngagementPanelContentRenderer?: {
						hack: boolean;
					};
					structuredDescriptionContentRenderer?: {
						items: {
							videoDescriptionHeaderRenderer?: {
								title: {
									runs: {
										text: string;
										navigationEndpoint?: {
											clickTrackingParams: string;
											commandMetadata: {
												webCommandMetadata: {
													url: string;
													webPageType: string;
													rootVe: number;
													apiUrl: string;
												};
											};
											browseEndpoint: {
												browseId: string;
												params: string;
											};
										};
										loggingDirectives?: {
											trackingParams: string;
											visibility: {
												types: string;
											};
										};
									}[];
								};
								channel: {
									simpleText: string;
								};
								views: {
									simpleText: string;
								};
								publishDate: {
									simpleText: string;
								};
								factoid: {
									factoidRenderer?: {
										value: {
											simpleText: string;
										};
										label: {
											simpleText: string;
										};
										accessibilityText: string;
									};
									viewCountFactoidRenderer?: {
										viewCountEntityKey: string;
										factoid: {
											factoidRenderer: {
												value: {
													simpleText: string;
												};
												label: {
													simpleText: string;
												};
												accessibilityText: string;
											};
										};
										viewCountType: string;
									};
								}[];
								channelNavigationEndpoint: {
									clickTrackingParams: string;
									commandMetadata: {
										webCommandMetadata: {
											url: string;
											webPageType: string;
											rootVe: number;
											apiUrl: string;
										};
									};
									browseEndpoint: {
										browseId: string;
										canonicalBaseUrl: string;
									};
								};
								channelThumbnail: {
									thumbnails: {
										url: string;
									}[];
								};
							};
							expandableVideoDescriptionBodyRenderer?: {
								showMoreText: {
									accessibility: {
										accessibilityData: {
											label: string;
										};
									};
									simpleText: string;
								};
								showLessText: {
									simpleText: string;
								};
								attributedDescriptionBodyText: {
									content: string;
									styleRuns: {
										startIndex: number;
										length: number;
										styleRunExtensions: {
											styleRunColorMapExtension: {
												colorMap: {
													key: string;
													value: number;
												}[];
											};
										};
										fontFamilyName: string;
									}[];
								};
								headerRuns: {
									startIndex: number;
									length: number;
									headerMapping: string;
								}[];
							};
							reelShelfRenderer?: {
								title: {
									runs: {
										text: string;
									}[];
								};
								items: {
									shortsLockupViewModel: {
										entityId: string;
										accessibilityText: string;
										thumbnail: {
											sources: {
												url: string;
												width: number;
												height: number;
											}[];
										};
										onTap: {
											innertubeCommand: {
												clickTrackingParams: string;
												commandMetadata: {
													webCommandMetadata: {
														url: string;
														webPageType: string;
														rootVe: number;
													};
												};
												reelWatchEndpoint: {
													videoId: string;
													playerParams: string;
													thumbnail: {
														thumbnails: {
															url: string;
															width: number;
															height: number;
														}[];
														isOriginalAspectRatio: boolean;
													};
													overlay: {
														reelPlayerOverlayRenderer: {
															style: string;
															trackingParams: string;
															reelPlayerNavigationModel: string;
														};
													};
													params: string;
													sequenceProvider: string;
													sequenceParams: string;
													loggingContext: {
														vssLoggingContext: {
															serializedContextData: string;
														};
														qoeLoggingContext: {
															serializedContextData: string;
														};
													};
													ustreamerConfig: string;
												};
											};
										};
										menuOnTap: {
											innertubeCommand: {
												clickTrackingParams: string;
												showSheetCommand: {
													panelLoadingStrategy: {
														inlineContent: {
															sheetViewModel: {
																content: {
																	listViewModel: {
																		listItems: {
																			listItemViewModel: {
																				title: {
																					content: string;
																				};
																				leadingImage: {
																					sources: {
																						clientResource: {
																							imageName: string;
																						};
																					}[];
																				};
																				rendererContext: {
																					loggingContext?: {
																						loggingDirectives: {
																							trackingParams: string;
																						};
																					};
																					commandContext: {
																						onTap: {
																							innertubeCommand: {
																								clickTrackingParams: string;
																								commandMetadata: {
																									webCommandMetadata: {
																										sendPost?: boolean;
																										ignoreNavigation?: boolean;
																									};
																								};
																								signalServiceEndpoint?: {
																									signal: string;
																									actions: {
																										clickTrackingParams: string;
																										addToPlaylistCommand?: {
																											openMiniplayer: boolean;
																											openListPanel: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: string[];
																													params: string;
																												};
																											};
																											videoIds: string[];
																										};
																										openPopupAction?: {
																											popup: {
																												notificationActionRenderer: {
																													responseText: {
																														simpleText: string;
																													};
																													trackingParams: string;
																												};
																											};
																											popupType: string;
																										};
																									}[];
																								};
																								userFeedbackEndpoint?: {
																									additionalDatas: {
																										userFeedbackEndpointProductSpecificValueData: {
																											key: string;
																											value: string;
																										};
																									}[];
																								};
																							};
																						};
																					};
																				};
																			};
																		}[];
																	};
																};
															};
														};
													};
												};
											};
										};
										indexInCollection: number;
										menuOnTapA11yLabel: string;
										overlayMetadata: {
											primaryText: {
												content: string;
											};
											secondaryText: {
												content: string;
											};
										};
										loggingDirectives: {
											trackingParams: string;
											visibility: {
												types: string;
											};
										};
									};
								}[];
								trackingParams: string;
							};
							videoDescriptionTranscriptSectionRenderer?: {
								sectionTitle: {
									runs: {
										text: string;
									}[];
								};
								subHeaderText: {
									runs: {
										text: string;
									}[];
								};
								primaryButton: {
									buttonRenderer: {
										style: string;
										size: string;
										isDisabled: boolean;
										text: {
											runs: {
												text: string;
											}[];
										};
										trackingParams: string;
										command: {
											clickTrackingParams: string;
											commandExecutorCommand: {
												commands: {
													clickTrackingParams: string;
													showEngagementPanelEndpoint?: {
														panelIdentifier: string;
														sourcePanelIdentifier: string;
													};
													scrollToEngagementPanelCommand?: {
														targetId: string;
													};
												}[];
											};
										};
									};
								};
								trackingParams: string;
							};
							videoDescriptionInfocardsSectionRenderer?: {
								sectionTitle: {
									simpleText: string;
								};
								creatorVideosButton: {
									buttonRenderer: {
										style: string;
										size: string;
										isDisabled: boolean;
										text: {
											simpleText: string;
										};
										icon: {
											iconType: string;
										};
										trackingParams: string;
										command: {
											clickTrackingParams: string;
											commandMetadata: {
												webCommandMetadata: {
													url: string;
													webPageType: string;
													rootVe: number;
													apiUrl: string;
												};
											};
											browseEndpoint: {
												browseId: string;
												params: string;
											};
										};
									};
								};
								creatorAboutButton: {
									buttonRenderer: {
										style: string;
										size: string;
										isDisabled: boolean;
										text: {
											simpleText: string;
										};
										icon: {
											iconType: string;
										};
										trackingParams: string;
										command: {
											clickTrackingParams: string;
											commandMetadata: {
												webCommandMetadata: {
													url: string;
													webPageType: string;
													rootVe: number;
													apiUrl: string;
												};
											};
											browseEndpoint: {
												browseId: string;
												params: string;
											};
										};
									};
								};
								sectionSubtitle: {
									accessibility: {
										accessibilityData: {
											label: string;
										};
									};
									simpleText: string;
								};
								channelAvatar: {
									thumbnails: {
										url: string;
									}[];
								};
								channelEndpoint: {
									clickTrackingParams: string;
									commandMetadata: {
										webCommandMetadata: {
											url: string;
											webPageType: string;
											rootVe: number;
											apiUrl: string;
										};
									};
									browseEndpoint: {
										browseId: string;
										canonicalBaseUrl: string;
									};
								};
								creatorCustomUrlButtons: {
									buttonViewModel: {
										title: string;
										onTap: {
											innertubeCommand: {
												clickTrackingParams: string;
												commandMetadata: {
													webCommandMetadata: {
														url: string;
														webPageType: string;
														rootVe: number;
													};
												};
												urlEndpoint: {
													url: string;
													target: string;
												};
											};
										};
										style: string;
										trackingParams: string;
										type: string;
										buttonSize: string;
										iconImage: {
											url: string;
											width: number;
											height: number;
										};
									};
								}[];
								trackingParams: string;
							};
						}[];
					};
					continuationItemRenderer?: {
						trigger: string;
						continuationEndpoint: {
							clickTrackingParams: string;
							commandMetadata: {
								webCommandMetadata: {
									sendPost: boolean;
									apiUrl: string;
								};
							};
							getTranscriptEndpoint: {
								params: string;
							};
						};
					};
				};
				veType?: number;
				targetId: string;
				visibility: string;
				loggingDirectives: {
					trackingParams: string;
					visibility: {
						types: string;
					};
				};
				onShowCommands?: {
					clickTrackingParams: string;
					scrollToEngagementPanelCommand: {
						targetId: string;
					};
				}[];
			};
		}[];
		topbar: {
			desktopTopbarRenderer: {
				logo: {
					topbarLogoRenderer: {
						iconImage: {
							iconType: string;
						};
						tooltipText: {
							runs: {
								text: string;
							}[];
						};
						endpoint: {
							clickTrackingParams: string;
							commandMetadata: {
								webCommandMetadata: {
									url: string;
									webPageType: string;
									rootVe: number;
									apiUrl: string;
								};
							};
							browseEndpoint: {
								browseId: string;
							};
						};
						trackingParams: string;
						overrideEntityKey: string;
					};
				};
				searchbox: {
					fusionSearchboxRenderer: {
						icon: {
							iconType: string;
						};
						placeholderText: {
							runs: {
								text: string;
							}[];
						};
						config: {
							webSearchboxConfig: {
								requestLanguage: string;
								requestDomain: string;
								hasOnscreenKeyboard: boolean;
								focusSearchbox: boolean;
							};
						};
						trackingParams: string;
						searchEndpoint: {
							clickTrackingParams: string;
							commandMetadata: {
								webCommandMetadata: {
									url: string;
									webPageType: string;
									rootVe: number;
								};
							};
							searchEndpoint: {
								query: string;
							};
						};
						clearButton: {
							buttonRenderer: {
								style: string;
								size: string;
								isDisabled: boolean;
								icon: {
									iconType: string;
								};
								trackingParams: string;
								accessibilityData: {
									accessibilityData: {
										label: string;
									};
								};
							};
						};
					};
				};
				trackingParams: string;
				topbarButtons: {
					topbarMenuButtonRenderer?: {
						icon: {
							iconType: string;
						};
						menuRequest: {
							clickTrackingParams: string;
							commandMetadata: {
								webCommandMetadata: {
									sendPost: boolean;
									apiUrl: string;
								};
							};
							signalServiceEndpoint: {
								signal: string;
								actions: {
									clickTrackingParams: string;
									openPopupAction: {
										popup: {
											multiPageMenuRenderer: {
												trackingParams: string;
												style: string;
												showLoadingSpinner: boolean;
											};
										};
										popupType: string;
										beReused: boolean;
									};
								}[];
							};
						};
						trackingParams: string;
						accessibility: {
							accessibilityData: {
								label: string;
							};
						};
						tooltip: string;
						style: string;
					};
					buttonRenderer?: {
						style: string;
						size: string;
						text: {
							runs: {
								text: string;
							}[];
						};
						icon: {
							iconType: string;
						};
						navigationEndpoint: {
							clickTrackingParams: string;
							commandMetadata: {
								webCommandMetadata: {
									url: string;
									webPageType: string;
									rootVe: number;
								};
							};
							signInEndpoint: {
								idamTag: string;
							};
						};
						trackingParams: string;
						targetId: string;
					};
				}[];
				hotkeyDialog: {
					hotkeyDialogRenderer: {
						title: {
							runs: {
								text: string;
							}[];
						};
						sections: {
							hotkeyDialogSectionRenderer: {
								title: {
									runs: {
										text: string;
									}[];
								};
								options: {
									hotkeyDialogSectionOptionRenderer: {
										label: {
											runs: {
												text: string;
											}[];
										};
										hotkey: string;
										hotkeyAccessibilityLabel?: {
											accessibilityData: {
												label: string;
											};
										};
									};
								}[];
							};
						}[];
						dismissButton: {
							buttonRenderer: {
								style: string;
								size: string;
								isDisabled: boolean;
								text: {
									runs: {
										text: string;
									}[];
								};
								trackingParams: string;
							};
						};
						trackingParams: string;
					};
				};
				backButton: {
					buttonRenderer: {
						trackingParams: string;
						command: {
							clickTrackingParams: string;
							commandMetadata: {
								webCommandMetadata: {
									sendPost: boolean;
								};
							};
							signalServiceEndpoint: {
								signal: string;
								actions: {
									clickTrackingParams: string;
									signalAction: {
										signal: string;
									};
								}[];
							};
						};
					};
				};
				forwardButton: {
					buttonRenderer: {
						trackingParams: string;
						command: {
							clickTrackingParams: string;
							commandMetadata: {
								webCommandMetadata: {
									sendPost: boolean;
								};
							};
							signalServiceEndpoint: {
								signal: string;
								actions: {
									clickTrackingParams: string;
									signalAction: {
										signal: string;
									};
								}[];
							};
						};
					};
				};
				a11ySkipNavigationButton: {
					buttonRenderer: {
						style: string;
						size: string;
						isDisabled: boolean;
						text: {
							runs: {
								text: string;
							}[];
						};
						trackingParams: string;
						command: {
							clickTrackingParams: string;
							commandMetadata: {
								webCommandMetadata: {
									sendPost: boolean;
								};
							};
							signalServiceEndpoint: {
								signal: string;
								actions: {
									clickTrackingParams: string;
									signalAction: {
										signal: string;
									};
								}[];
							};
						};
					};
				};
				voiceSearchButton: {
					buttonRenderer: {
						style: string;
						size: string;
						isDisabled: boolean;
						serviceEndpoint: {
							clickTrackingParams: string;
							commandMetadata: {
								webCommandMetadata: {
									sendPost: boolean;
								};
							};
							signalServiceEndpoint: {
								signal: string;
								actions: {
									clickTrackingParams: string;
									openPopupAction: {
										popup: {
											voiceSearchDialogRenderer: {
												placeholderHeader: {
													runs: {
														text: string;
													}[];
												};
												promptHeader: {
													runs: {
														text: string;
													}[];
												};
												exampleQuery1: {
													runs: {
														text: string;
													}[];
												};
												exampleQuery2: {
													runs: {
														text: string;
													}[];
												};
												promptMicrophoneLabel: {
													runs: {
														text: string;
													}[];
												};
												loadingHeader: {
													runs: {
														text: string;
													}[];
												};
												connectionErrorHeader: {
													runs: {
														text: string;
													}[];
												};
												connectionErrorMicrophoneLabel: {
													runs: {
														text: string;
													}[];
												};
												permissionsHeader: {
													runs: {
														text: string;
													}[];
												};
												permissionsSubtext: {
													runs: {
														text: string;
													}[];
												};
												disabledHeader: {
													runs: {
														text: string;
													}[];
												};
												disabledSubtext: {
													runs: {
														text: string;
													}[];
												};
												microphoneButtonAriaLabel: {
													runs: {
														text: string;
													}[];
												};
												exitButton: {
													buttonRenderer: {
														style: string;
														size: string;
														isDisabled: boolean;
														icon: {
															iconType: string;
														};
														trackingParams: string;
														accessibilityData: {
															accessibilityData: {
																label: string;
															};
														};
													};
												};
												trackingParams: string;
												microphoneOffPromptHeader: {
													runs: {
														text: string;
													}[];
												};
											};
										};
										popupType: string;
									};
								}[];
							};
						};
						icon: {
							iconType: string;
						};
						tooltip: string;
						trackingParams: string;
						accessibilityData: {
							accessibilityData: {
								label: string;
							};
						};
					};
				};
			};
		};
		pageVisualEffects: {
			cinematicContainerRenderer: {
				presentationStyle: string;
				config: {
					lightThemeBackgroundColor: number;
					darkThemeBackgroundColor: number;
					animationConfig: {
						minImageUpdateIntervalMs: number;
						crossfadeDurationMs: number;
						crossfadeStartOffset: number;
						maxFrameRate: number;
					};
					colorSourceSizeMultiplier: number;
					applyClientImageBlur: boolean;
					bottomColorSourceHeightMultiplier: number;
					maxBottomColorSourceHeight: number;
					colorSourceWidthMultiplier: number;
					colorSourceHeightMultiplier: number;
					blurStrength: number;
					watchFullscreenConfig: {
						colorSourceWidthMultiplier: number;
						colorSourceHeightMultiplier: number;
						scrimWidthMultiplier: number;
						scrimHeightMultiplier: number;
						scrimGradientConfig: {
							gradientType: string;
							gradientStartPointX: number;
							gradientStartPointY: number;
							gradientEndPointX: number;
							gradientEndPointY: number;
						};
					};
					enableInLightTheme: boolean;
				};
				colorStore: {
					sampledColors: {
						key: string;
						value: number;
					}[];
				};
			};
		}[];
		frameworkUpdates: {
			entityBatchUpdate: {
				mutations: {
					entityKey: string;
					type: string;
					payload?: {
						subscriptionStateEntity?: {
							key: string;
							subscribed: boolean;
						};
						likeStatusEntity?: {
							key: string;
							likeStatus: string;
						};
						macroMarkersListEntity?: {
							key: string;
							externalVideoId: string;
							markersList: {
								markerType: string;
								markers: {
									startMillis: string;
									durationMillis: string;
									intensityScoreNormalized: number;
								}[];
								markersMetadata: {
									heatmapMetadata: {
										maxHeightDp: number;
										minHeightDp: number;
										showHideAnimationDurationMillis: number;
									};
								};
								markersDecoration: {
									timedMarkerDecorations: {
										visibleTimeRangeStartMillis: number;
										visibleTimeRangeEndMillis: number;
										decorationTimeMillis: number;
										label: {
											runs: {
												text: string;
											}[];
										};
										icon: string;
									}[];
								};
							};
						};
					};
					options?: {
						persistenceOption: string;
					};
				}[];
				timestamp: {
					seconds: string;
					nanos: number;
				};
			};
		};
	};
	html5player: string;
	related_videos: {
		id: string;
		title: string;
		published: string;
		author: {
			id: string;
			name: string;
			user: string;
			channel_url: string;
			user_url: string;
			thumbnails: {
				url: string;
				width: number;
				height: number;
			}[];
			verified: boolean;
		};
		short_view_count_text: string;
		view_count: string;
		length_seconds: number;
		thumbnails: {
			url: string;
			width: number;
			height: number;
		}[];
		richThumbnails: {
			url: string;
			width: number;
			height: number;
		}[];
		isLive: boolean;
	}[];
	videoDetails: {
		embed: {
			iframeUrl: string;
			width: number;
			height: number;
		};
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
		channelId: string;
		isOwnerViewing: boolean;
		isCrawlable: boolean;
		allowRatings: boolean;
		author: {
			id: string;
			name: string;
			user: string;
			channel_url: string;
			external_channel_url: string;
			user_url: string;
			thumbnails: {
				url: string;
				width: number;
				height: number;
			}[];
			verified: boolean;
			subscriber_count: number;
		};
		isPrivate: boolean;
		isUnpluggedCorpus: boolean;
		isLiveContent: boolean;
		media: {};
		likes: number;
		age_restricted: boolean;
		video_url: string;
		storyboards: {
			templateUrl: string;
			thumbnailWidth: number;
			thumbnailHeight: number;
			thumbnailCount: number;
			interval: number;
			columns: number;
			rows: number;
			storyboardCount: number;
		}[];
		chapters: any[];
		thumbnails: {
			url: string;
			width: number;
			height: number;
		}[];
	};
	formats: {
		mimeType: string;
		qualityLabel?: string;
		bitrate: number;
		audioBitrate?: number;
		itag: number;
		url: string;
		width?: number;
		height?: number;
		lastModified: string;
		contentLength: string;
		quality: string;
		fps?: number;
		projectionType: string;
		averageBitrate?: number;
		audioQuality?: string;
		approxDurationMs: string;
		audioSampleRate?: string;
		audioChannels?: number;
		hasVideo: boolean;
		hasAudio: boolean;
		container: string;
		codecs: string;
		videoCodec?: string;
		audioCodec?: string;
		isLive: boolean;
		isHLS: boolean;
		isDashMPD: boolean;
		initRange?: {
			start: string;
			end: string;
		};
		indexRange?: {
			start: string;
			end: string;
		};
		colorInfo?: {
			primaries: string;
			transferCharacteristics: string;
			matrixCoefficients: string;
		};
		highReplication?: boolean;
		loudnessDb?: number;
		xtags?: string;
		isDrc?: boolean;
	}[];
	full: boolean;
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
	link_flair_richtext: {
		e: string;
		t: string;
	}[];
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
	media_embed: {};
	thumbnail_width: number;
	author_flair_template_id: null;
	is_original_content: boolean;
	author_fullname: string;
	secure_media: {
		reddit_video: {
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
		};
	};
	is_reddit_media_domain: boolean;
	is_meta: boolean;
	category: null;
	secure_media_embed: {};
	link_flair_text: string;
	can_mod_post: boolean;
	score: number;
	approved_by: null;
	is_created_from_ads_ui: boolean;
	author_premium: boolean;
	thumbnail: string;
	edited: boolean;
	author_flair_css_class: null;
	author_flair_richtext: {
		e: string;
		t: string;
	}[];
	gildings: {};
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
	preview: {
		images: {
			source: {
				url: string;
				width: number;
				height: number;
			};
			resolutions: {
				url: string;
				width: number;
				height: number;
			}[];
			variants: {};
			id: string;
		}[];
		enabled: boolean;
	};
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
	media: {
		reddit_video: {
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
		};
	};
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
