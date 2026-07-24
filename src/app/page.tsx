import { Hero } from '@/components/Hero';
import { ArticleCard } from '@/components/ArticleCard';
import { NewsletterEmbed } from '@/components/NewsletterEmbed';
import { articles } from '@/data/mock/articles';
import { categories } from '@/data/mock/categories';
import Link from 'next/link';

export default function Home() {
  const featuredArticles = articles.slice(0, 3);

  return (
    <main>
      <Hero 
        variant="home" 
        title="Philosophy, Religion, Culture" 
        subtitle="A samvāda-driven digital publication." 
      />
      
      {/* Mission statement strip */}
      <section className="bg-bone-light py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-4xl text-left">
          <p className="font-serif text-3xl md:text-5xl leading-tight text-charcoal">
            Our mission is to foster deep, contemplative dialogue on the most fundamental questions of human existence, drawing from ancient wisdom and contemporary thought.
          </p>
        </div>
      </section>

      {/* Featured articles */}
      <section className="py-24 bg-bone">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-baseline mb-16">
            <h2 className="font-serif text-3xl text-charcoal">Featured Writing</h2>
            <Link href="/articles" className="font-sans text-sm text-ochre hover:text-ochre-dark transition-colors uppercase tracking-wider">
              View all &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featuredArticles.map(article => (
              <ArticleCard key={article.slug} article={article} variant="grid" />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-mist-1">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl text-charcoal mb-16">Explore by Topic</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map(category => (
              <Link key={category.slug} href={`/articles?category=${category.slug}`} className="block group p-8 bg-bone hover:shadow-lg transition-all duration-300">
                <h3 className="font-serif text-2xl text-charcoal mb-4 group-hover:text-ochre transition-colors">{category.name}</h3>
                <p className="font-sans text-mist-3">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 bg-charcoal">
        <div className="container mx-auto px-4 flex justify-center">
          <NewsletterEmbed variant="dark" />
        </div>
      </section>
    </main>
  );
}
