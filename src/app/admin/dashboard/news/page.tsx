'use client';

import { useState, useEffect } from 'react';
import { apiClient } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Plus, Edit, Trash2, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';

interface NewsItem {
  id: string;
  title: string;
  description: string | null;
  category: string | null;
  date: string;
  imageUrl: string | null;
  content: string | null;
  externalLink: string | null;
  isPublished: boolean;
}

export default function NewsManagementPage() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<NewsItem | null>(null);
  const [formLoading, setFormLoading] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    date: new Date().toISOString().split('T')[0],
    content: '',
    externalLink: '',
    isPublished: true,
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    try {
      setLoading(true);
      const response = await apiClient.getNews();
      setItems(response.data);
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to load news items',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleOpenDialog = (item?: NewsItem) => {
    if (item) {
      setEditingItem(item);
      setFormData({
        title: item.title,
        description: item.description || '',
        category: item.category || '',
        date: item.date ? new Date(item.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
        content: item.content || '',
        externalLink: item.externalLink || '',
        isPublished: item.isPublished,
      });
      setPreviewUrl(item.imageUrl || null);
    } else {
      setEditingItem(null);
      setFormData({
        title: '',
        description: '',
        category: '',
        date: new Date().toISOString().split('T')[0],
        content: '',
        externalLink: '',
        isPublished: true,
      });
      setPreviewUrl(null);
    }
    setImageFile(null);
    setDialogOpen(true);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('date', formData.date);
      formDataToSend.append('content', formData.content);
      formDataToSend.append('externalLink', formData.externalLink);
      formDataToSend.append('isPublished', formData.isPublished.toString());
      
      if (imageFile) {
        formDataToSend.append('image', imageFile);
      }

      if (editingItem) {
        await apiClient.updateNewsItem(editingItem.id, formDataToSend);
        toast({
          title: 'Success',
          description: 'News item updated successfully',
        });
      } else {
        await apiClient.createNewsItem(formDataToSend);
        toast({
          title: 'Success',
          description: 'News item created successfully',
        });
      }

      setDialogOpen(false);
      loadItems();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to save news item',
        variant: 'destructive',
      });
    } finally {
      setFormLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this news item?')) return;

    try {
      await apiClient.deleteNewsItem(id);
      toast({
        title: 'Success',
        description: 'News item deleted successfully',
      });
      loadItems();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to delete news item',
        variant: 'destructive',
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">News Management</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Create and manage news articles and announcements
          </p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => handleOpenDialog()}>
              <Plus className="h-4 w-4 mr-2" />
              Add News
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingItem ? 'Edit News Item' : 'Add News Item'}
              </DialogTitle>
              <DialogDescription>
                {editingItem
                  ? 'Update the news item details'
                  : 'Create a new news article or announcement'}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Date *</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                  rows={5}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="externalLink">External Link</Label>
                <Input
                  id="externalLink"
                  type="url"
                  value={formData.externalLink}
                  onChange={(e) =>
                    setFormData({ ...formData, externalLink: e.target.value })
                  }
                  placeholder="https://..."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="image">
                  {editingItem ? 'New Image (optional)' : 'Image (optional)'}
                </Label>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {previewUrl && (
                  <div className="mt-2">
                    <Image
                      src={previewUrl}
                      alt="Preview"
                      width={200}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="isPublished"
                  checked={formData.isPublished}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, isPublished: checked })
                  }
                />
                <Label htmlFor="isPublished">Published</Label>
              </div>
              <div className="flex justify-end gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={formLoading}>
                  {formLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : editingItem ? (
                    'Update'
                  ) : (
                    'Create'
                  )}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>News Items</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center">
                    No news items found
                  </TableCell>
                </TableRow>
              ) : (
                items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.title}</TableCell>
                    <TableCell>{item.category || '-'}</TableCell>
                    <TableCell>
                      {new Date(item.date).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      {item.isPublished ? (
                        <span className="text-green-600">Published</span>
                      ) : (
                        <span className="text-gray-400">Draft</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleOpenDialog(item)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(item.id)}
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
