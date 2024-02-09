// interfaces/CardProps.ts
export interface CardProps {
    identifier: string; // уникальный идентификатор игры
    seo_title: string; // уникальный SEO-ключ игры
    title: string; // Текстовое название игры
    provider: string; // ID провайдера игры
    categories: string[]; // Список ID категорий, в которые входит игра
}
