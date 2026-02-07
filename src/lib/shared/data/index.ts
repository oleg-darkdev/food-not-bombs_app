import nav from './navigation';
import docsNav from './docsNav';

// faq
import appFaq from './faq/appFaq';
import basicFaq from './faq/basicFaq';
import boardgameFaq from './faq/boardgameFaq';
import fnbFaq from './faq/fnbFaq';
import rulesAndInterpretationFaq from './faq/rulesAndInterpretationFaq';
import componentsFaq from './faq/componentsFaq';

// engine
// import applyRareEvent from './engine/applyRareEvent';
// import generateRound from './engine/generateRound';

import locations from './engine/data/locations';
// import rareEvents from './engine/data/rareEvents';
import scenarios from './engine/data/scenarios';

import { expectedValue, biasedRandom } from './engine/core/rng';
import { escalationFactor, applyEscalationToBias } from './engine/core/escalation';
import applyAntiStreaks from './engine/core/applyAntiStreaks';
import locationGenerator from './engine/core/locationGenerator';
import runGame from './engine/game/gameRunner';
import roundGenerator from './engine/game/roundGenerator';
import probabilityLog from './engine/logging/probabilityLog';
import locationEvents from './engine/data/locationEvents';
import calculateLocationEventChance from './engine/core/calculateLocationEventChance';
// import scenarios from './engine/core';
// import scenarios from './engine/core';
// import scenarios from './engine/core';
// import scenarios from './engine/core';
import applyGlobalBalance from './engine/core/applyGlobalBalance';

import kit from './app-i18/components/kit/en';
import foodTokens from './app-i18/components/food-tokens/en';
import tablets from './app-i18/components/tablets/en';
import roles from './app-i18/components/roles/en';
import preparation from './app-i18/preparation/en';
import winTokens from './app-i18/components/win-tokens/en';
import loseTokens from './app-i18/components/lose-tokens/en';
import winLose from './app-i18/rules/win-lose/en';
import pnp from './app-i18/pnp/en';
// import foodTokens from './app-i18/components/tablets/en';
// import foodTokens from './app-i18/components/tablets/en';

import volunteeringApp from './app-i18/volunteering/app/en';
import volunteeringGame from './app-i18/volunteering/game/en';
import volunteeringFnb from './app-i18/volunteering/fnb/en';
// import foodTokens from './app-i18/components/tablets/en';
// import foodTokens from './app-i18/components/tablets/en';

import {
	groupsListAfrika,
	groupsListAustralia,
	groupsListAsia,
	groupsListCanada,
	groupsListCentralSouthAmerica,
	groupsListMexico,
	groupsListUsa,
	groupsListEurope,
	groupsListRussia,
	groupsByRegion,
	allGroups,
	promoFnbGroups,
	// countriesList,
	poland
} from './groupsList';

export {
	// faq
	fnbFaq,
	boardgameFaq,
	basicFaq,
	appFaq,
	componentsFaq,
	rulesAndInterpretationFaq,


	// 
	scenarios,
	// rareEvents,
	locations,
	applyAntiStreaks,
	applyGlobalBalance,
	locationEvents,
	runGame,
	roundGenerator,
	probabilityLog,
	locationGenerator,
	expectedValue,
	biasedRandom,
	escalationFactor,
	applyEscalationToBias,
	calculateLocationEventChance,

	// app
	kit,
	foodTokens,
	tablets,
	roles,
	preparation,
	winTokens,
	loseTokens,
	volunteeringApp,
	volunteeringGame,
	volunteeringFnb,
	winLose,
	// data
	poland,
	promoFnbGroups,
	docsNav,
	pnp,
	nav,
	// countriesList,
	groupsByRegion,
	allGroups,
	groupsListAfrika,
	groupsListAustralia,
	groupsListRussia,
	groupsListAsia,
	groupsListCanada,
	groupsListCentralSouthAmerica,
	groupsListMexico,
	groupsListUsa,
	groupsListEurope
};
