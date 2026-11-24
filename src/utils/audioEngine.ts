const WEDDING_TRACK_URL =
  import.meta.env.BASE_URL + 'assets/aistudio/1724159501_mad-nazarov-jeren-halnazarowa-my-love_1d983b14.mp3';

class RoyalAudioEngine {
  private audio: HTMLAudioElement | null = null;
  private playing = false;

  private ensureAudio(): HTMLAudioElement {
    if (!this.audio) {
      const audio = new Audio(WEDDING_TRACK_URL);
      audio.loop = true;
      audio.preload = 'auto';
      audio.volume = 0.85;
      audio.addEventListener('ended', () => {
        this.playing = false;
      });
      this.audio = audio;
    }
    return this.audio;
  }

  public async start(): Promise<boolean> {
    try {
      const audio = this.ensureAudio();
      await audio.play();
      this.playing = true;
      return true;
    } catch {
      this.playing = false;
      return false;
    }
  }

  public stop(): void {
    this.playing = false;
    if (this.audio) {
      this.audio.pause();
    }
  }

  public isPlaying(): boolean {
    return this.playing;
  }
}

export const royalAudio = new RoyalAudioEngine();
