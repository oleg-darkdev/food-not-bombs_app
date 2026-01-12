
// log.locationEvents = triggeredEvents;

const probabilityLog = {
  rounds: [],

  logRound(roundLog) {
    this.rounds.push(roundLog);
  },

  printLastRound() {
    const last = this.rounds[this.rounds.length - 1];
    console.group(`📊 Лог раунда ${last.round}`);

    console.table(
			last.locations.map((l) => ({
				number: l.number,
				location: l.title,
				// location: l.id,
				expected: l.expected.toFixed(2),
				bias: l.finalBias.toFixed(2),
				result: l.result
			}))
		);

    if (last.globalBalance) {
      console.log("⚖️ Глобальный баланс:", last.globalBalance);
    }

    if (last.rareEvent) {
      console.log("✨ Редкое событие:", last.rareEvent);
    }

    console.log("🔥 Эскалация:", last.escalation);
    console.groupEnd();
  },

  getSummary() {
    return this.rounds.map(r => ({
      round: r.round,
      total: r.locations.reduce((s, l) => s + l.result, 0),
      escalation: r.escalation,
      rareEvent: r.rareEvent
    }));
  }
};

export default probabilityLog;
