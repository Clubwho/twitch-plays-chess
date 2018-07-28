(function () {
	'use strict';

	class TpcVoteTimer extends Polymer.Element {
		static get is() {
			return 'tpc-vote-timer';
		}

		static get properties() {
			return {}
		}

		ready() {
			super.ready();
		}

	}

	customElements.define(TpcVoteTimer.is, TpcVoteTimer);
})();