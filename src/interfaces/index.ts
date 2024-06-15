export interface IFeedback {
  id: number;
  rating: number;
  text: string;
}

export interface IFeedbackStore {
  feedbacks: IFeedback[];
}
