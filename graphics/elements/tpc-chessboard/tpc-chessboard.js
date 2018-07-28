(function () {
	'use strict';

	class TpcChessboard extends Polymer.Element {
		static get is() {
			return 'tpc-chessboard';
		}

		static get properties() {
			return {}
		}

		ready() {
			super.ready();
			var board = ChessBoard(this.$.board, 'start');
		}

	}

	customElements.define(TpcChessboard.is, TpcChessboard);
})();